import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserPreferencesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateUserPreferencesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateUserPreferencesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateUserPreferencesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateUserPreferencesSecurityOption2;
}


export class UpdateUserPreferencesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: UpdateUserPreferencesSecurity;
}


export class UpdateUserPreferencesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateUserPreferencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateUserPreferences200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  updateUserPreferencesDefaultApplicationJsonObject?: UpdateUserPreferencesDefaultApplicationJson;
}
