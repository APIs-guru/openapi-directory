import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPreferencesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateUserPreferencesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateUserPreferencesRequest extends SpeakeasyBase {
    request: Map<string, any>;
    security: UpdateUserPreferencesSecurity;
}
export declare class UpdateUserPreferencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateUserPreferences200ApplicationJsonObject?: Map<string, any>;
    updateUserPreferencesDefaultApplicationJsonObject?: UpdateUserPreferencesDefaultApplicationJson;
}
