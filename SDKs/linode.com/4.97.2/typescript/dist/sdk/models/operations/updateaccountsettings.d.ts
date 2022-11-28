import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountSettingsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateAccountSettingsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateAccountSettingsRequest extends SpeakeasyBase {
    request: shared.AccountSettingsInput;
    security: UpdateAccountSettingsSecurity;
}
export declare class UpdateAccountSettingsResponse extends SpeakeasyBase {
    accountSettings?: shared.AccountSettings;
    contentType: string;
    statusCode: number;
    updateAccountSettingsDefaultApplicationJsonObject?: UpdateAccountSettingsDefaultApplicationJson;
}
