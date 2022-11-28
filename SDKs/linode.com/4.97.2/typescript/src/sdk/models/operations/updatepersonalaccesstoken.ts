import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePersonalAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenId" })
  tokenId: number;
}


export class UpdatePersonalAccessTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdatePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdatePersonalAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePersonalAccessTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PersonalAccessTokenInput;

  @SpeakeasyMetadata()
  security: UpdatePersonalAccessTokenSecurity;
}


export class UpdatePersonalAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalAccessToken?: shared.PersonalAccessToken;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePersonalAccessTokenDefaultApplicationJsonObject?: UpdatePersonalAccessTokenDefaultApplicationJson;
}
