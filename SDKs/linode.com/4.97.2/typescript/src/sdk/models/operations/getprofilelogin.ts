import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProfileLoginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=loginId" })
  loginId: number;
}


export class GetProfileLoginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetProfileLoginDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProfileLoginPathParams;

  @SpeakeasyMetadata()
  security: GetProfileLoginSecurity;
}


export class GetProfileLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  login?: shared.Login;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProfileLoginDefaultApplicationJsonObject?: GetProfileLoginDefaultApplicationJson;
}
