import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountSettingsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetAccountSettingsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetAccountSettingsRequest extends SpeakeasyBase {
    security: GetAccountSettingsSecurity;
}
export declare class GetAccountSettingsResponse extends SpeakeasyBase {
    accountSettings?: shared.AccountSettings;
    contentType: string;
    statusCode: number;
    getAccountSettingsDefaultApplicationJsonObject?: GetAccountSettingsDefaultApplicationJson;
}
