import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMyconfigGetUserSettingsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    country?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMyconfigGetUserSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMyconfigGetUserSettingsRequest extends SpeakeasyBase {
    queryParams: BooksMyconfigGetUserSettingsQueryParams;
    security: BooksMyconfigGetUserSettingsSecurity;
}
export declare class BooksMyconfigGetUserSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usersettings?: shared.Usersettings;
}
