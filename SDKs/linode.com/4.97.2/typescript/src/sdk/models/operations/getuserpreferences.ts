import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPreferencesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetUserPreferencesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetUserPreferencesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserPreferencesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserPreferencesSecurityOption2;
}


export class GetUserPreferencesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetUserPreferencesSecurity;
}


export class GetUserPreferencesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetUserPreferencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserPreferences200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  getUserPreferencesDefaultApplicationJsonObject?: GetUserPreferencesDefaultApplicationJson;
}
