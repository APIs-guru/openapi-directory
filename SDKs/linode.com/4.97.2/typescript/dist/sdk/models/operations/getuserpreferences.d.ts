import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPreferencesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetUserPreferencesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetUserPreferencesRequest extends SpeakeasyBase {
    security: GetUserPreferencesSecurity;
}
export declare class GetUserPreferencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUserPreferences200ApplicationJsonObject?: Map<string, any>;
    getUserPreferencesDefaultApplicationJsonObject?: GetUserPreferencesDefaultApplicationJson;
}
