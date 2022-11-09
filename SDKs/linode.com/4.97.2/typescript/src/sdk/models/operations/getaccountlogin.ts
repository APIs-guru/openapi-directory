import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountLoginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=loginId" })
  loginId: number;
}


export class GetAccountLoginSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetAccountLoginSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetAccountLoginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAccountLoginSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAccountLoginSecurityOption2;
}


export class GetAccountLoginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountLoginPathParams;

  @Metadata()
  security: GetAccountLoginSecurity;
}


export class GetAccountLoginDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetAccountLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  login?: shared.Login;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAccountLoginDefaultApplicationJsonObject?: GetAccountLoginDefaultApplicationJson;
}
