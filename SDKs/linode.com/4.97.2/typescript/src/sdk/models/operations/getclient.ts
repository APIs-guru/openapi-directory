import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class GetClientSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetClientDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClientPathParams;

  @SpeakeasyMetadata()
  security: GetClientSecurity;
}


export class GetClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oAuthClient?: shared.OAuthClient;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClientDefaultApplicationJsonObject?: GetClientDefaultApplicationJson;
}
