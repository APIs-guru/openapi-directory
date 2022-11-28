import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonalAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenId" })
  tokenId: number;
}


export class GetPersonalAccessTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetPersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPersonalAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPersonalAccessTokenPathParams;

  @SpeakeasyMetadata()
  security: GetPersonalAccessTokenSecurity;
}


export class GetPersonalAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalAccessToken?: shared.PersonalAccessToken;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPersonalAccessTokenDefaultApplicationJsonObject?: GetPersonalAccessTokenDefaultApplicationJson;
}
