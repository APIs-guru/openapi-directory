import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonalAccessTokensSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetPersonalAccessTokens200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.PersonalAccessToken })
  data?: shared.PersonalAccessToken[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetPersonalAccessTokensDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPersonalAccessTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPersonalAccessTokensSecurity;
}


export class GetPersonalAccessTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPersonalAccessTokens200ApplicationJsonObject?: GetPersonalAccessTokens200ApplicationJson;

  @SpeakeasyMetadata()
  getPersonalAccessTokensDefaultApplicationJsonObject?: GetPersonalAccessTokensDefaultApplicationJson;
}
