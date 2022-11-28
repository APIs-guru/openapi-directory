import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetClientSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class ResetClientSecretSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class ResetClientSecretDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResetClientSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetClientSecretPathParams;

  @SpeakeasyMetadata()
  security: ResetClientSecretSecurity;
}


export class ResetClientSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oAuthClient?: shared.OAuthClient;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resetClientSecretDefaultApplicationJsonObject?: ResetClientSecretDefaultApplicationJson;
}
