import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMyconfigUpdateUserSettingsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMyconfigUpdateUserSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMyconfigUpdateUserSettingsRequest extends SpeakeasyBase {
    queryParams: BooksMyconfigUpdateUserSettingsQueryParams;
    request?: shared.Usersettings;
    security: BooksMyconfigUpdateUserSettingsSecurity;
}
export declare class BooksMyconfigUpdateUserSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usersettings?: shared.Usersettings;
}
