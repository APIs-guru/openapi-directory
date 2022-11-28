import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserPreferencesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetUserPreferencesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetUserPreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetUserPreferencesSecurity;
}


export class GetUserPreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserPreferences200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  getUserPreferencesDefaultApplicationJsonObject?: GetUserPreferencesDefaultApplicationJson;
}
