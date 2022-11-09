import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUserSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetUserSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserSecurityOption2;
}


export class GetUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserPathParams;

  @Metadata()
  security: GetUserSecurity;
}


export class GetUserDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;

  @Metadata()
  getUserDefaultApplicationJsonObject?: GetUserDefaultApplicationJson;
}
