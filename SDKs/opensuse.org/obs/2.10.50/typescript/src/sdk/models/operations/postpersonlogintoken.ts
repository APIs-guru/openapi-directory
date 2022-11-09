import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPersonLoginTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}

export enum PostPersonLoginTokenOperationEnum {
    Runservice = "runservice"
,    Rebuild = "rebuild"
,    Release = "release"
}


export class PostPersonLoginTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=operation" })
  operation?: PostPersonLoginTokenOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scm_token" })
  scmToken?: string;
}


export class PostPersonLoginTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostPersonLoginTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPersonLoginTokenPathParams;

  @Metadata()
  queryParams: PostPersonLoginTokenQueryParams;

  @Metadata()
  security: PostPersonLoginTokenSecurity;
}


export class PostPersonLoginTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
