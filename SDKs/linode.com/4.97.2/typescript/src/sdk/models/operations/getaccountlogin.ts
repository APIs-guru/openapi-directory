import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountLoginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=loginId" })
  loginId: number;
}


export class GetAccountLoginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetAccountLoginDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetAccountLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountLoginPathParams;

  @SpeakeasyMetadata()
  security: GetAccountLoginSecurity;
}


export class GetAccountLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  login?: shared.Login;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAccountLoginDefaultApplicationJsonObject?: GetAccountLoginDefaultApplicationJson;
}
