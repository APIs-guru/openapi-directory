import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class UpdateClientSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateClientDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateClientPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.OAuthClientInput;

  @SpeakeasyMetadata()
  security: UpdateClientSecurity;
}


export class UpdateClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oAuthClient?: shared.OAuthClient;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateClientDefaultApplicationJsonObject?: UpdateClientDefaultApplicationJson;
}
