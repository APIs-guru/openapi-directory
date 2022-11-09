import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPersonLoginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}

export enum PostPersonLoginCmdEnum {
    ChangePassword = "change_password"
,    Lock = "lock"
,    Delete = "delete"
}


export class PostPersonLoginQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostPersonLoginCmdEnum;
}


export class PostPersonLoginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostPersonLoginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPersonLoginPathParams;

  @Metadata()
  queryParams: PostPersonLoginQueryParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: string;

  @Metadata()
  security: PostPersonLoginSecurity;
}


export class PostPersonLoginResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
