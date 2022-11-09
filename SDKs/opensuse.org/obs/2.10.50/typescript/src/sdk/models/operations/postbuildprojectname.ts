import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostBuildProjectNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;
}

export enum PostBuildProjectNameCmdEnum {
    Wipe = "wipe"
,    Restartbuild = "restartbuild"
,    Killbuild = "killbuild"
,    Abortbuild = "abortbuild"
,    Rebuild = "rebuild"
,    Unpublish = "unpublish"
,    Sendsysrq = "sendsysrq"
}


export class PostBuildProjectNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=arch" })
  arch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostBuildProjectNameCmdEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository?: string;
}


export class PostBuildProjectNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostBuildProjectNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostBuildProjectNamePathParams;

  @Metadata()
  queryParams: PostBuildProjectNameQueryParams;

  @Metadata()
  security: PostBuildProjectNameSecurity;
}


export class PostBuildProjectNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
