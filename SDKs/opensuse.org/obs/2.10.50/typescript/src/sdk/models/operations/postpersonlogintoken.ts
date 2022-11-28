import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPersonLoginTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}

export enum PostPersonLoginTokenOperationEnum {
    Runservice = "runservice",
    Rebuild = "rebuild",
    Release = "release"
}


export class PostPersonLoginTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=operation" })
  operation?: PostPersonLoginTokenOperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scm_token" })
  scmToken?: string;
}


export class PostPersonLoginTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostPersonLoginTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPersonLoginTokenPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPersonLoginTokenQueryParams;

  @SpeakeasyMetadata()
  security: PostPersonLoginTokenSecurity;
}


export class PostPersonLoginTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
