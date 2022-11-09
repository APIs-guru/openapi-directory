import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetClientSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class ResetClientSecretSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ResetClientSecretSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ResetClientSecretSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ResetClientSecretSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ResetClientSecretSecurityOption2;
}


export class ResetClientSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetClientSecretPathParams;

  @Metadata()
  security: ResetClientSecretSecurity;
}


export class ResetClientSecretDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResetClientSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  oAuthClient?: shared.OAuthClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  resetClientSecretDefaultApplicationJsonObject?: ResetClientSecretDefaultApplicationJson;
}
