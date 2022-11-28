import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPersonLoginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}

export enum PostPersonLoginCmdEnum {
    ChangePassword = "change_password",
    Lock = "lock",
    Delete = "delete"
}


export class PostPersonLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostPersonLoginCmdEnum;
}


export class PostPersonLoginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostPersonLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPersonLoginPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPersonLoginQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: string;

  @SpeakeasyMetadata()
  security: PostPersonLoginSecurity;
}


export class PostPersonLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
