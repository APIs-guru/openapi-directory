import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteUserSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteUserSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteUserSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteUserSecurityOption2;
}


export class DeleteUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserPathParams;

  @Metadata()
  security: DeleteUserSecurity;
}


export class DeleteUserDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteUser200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteUserDefaultApplicationJsonObject?: DeleteUserDefaultApplicationJson;
}
