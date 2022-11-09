import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileLoginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=loginId" })
  loginId: number;
}


export class GetProfileLoginSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetProfileLoginSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetProfileLoginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProfileLoginSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProfileLoginSecurityOption2;
}


export class GetProfileLoginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProfileLoginPathParams;

  @Metadata()
  security: GetProfileLoginSecurity;
}


export class GetProfileLoginDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  login?: shared.Login;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProfileLoginDefaultApplicationJsonObject?: GetProfileLoginDefaultApplicationJson;
}
