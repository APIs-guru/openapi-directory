import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBuildProjectNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;
}

export enum PostBuildProjectNameCmdEnum {
    Wipe = "wipe",
    Restartbuild = "restartbuild",
    Killbuild = "killbuild",
    Abortbuild = "abortbuild",
    Rebuild = "rebuild",
    Unpublish = "unpublish",
    Sendsysrq = "sendsysrq"
}


export class PostBuildProjectNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arch" })
  arch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostBuildProjectNameCmdEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository?: string;
}


export class PostBuildProjectNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostBuildProjectNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBuildProjectNamePathParams;

  @SpeakeasyMetadata()
  queryParams: PostBuildProjectNameQueryParams;

  @SpeakeasyMetadata()
  security: PostBuildProjectNameSecurity;
}


export class PostBuildProjectNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
