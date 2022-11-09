import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateUserSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateUserSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateUserSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateUserSecurityOption2;
}


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: CreateUserSecurity;
}


export class CreateUserDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;

  @Metadata()
  createUserDefaultApplicationJsonObject?: CreateUserDefaultApplicationJson;
}
