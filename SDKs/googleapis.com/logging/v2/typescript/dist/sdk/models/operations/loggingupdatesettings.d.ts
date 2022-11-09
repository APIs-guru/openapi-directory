import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingUpdateSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingUpdateSettingsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingUpdateSettingsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingUpdateSettingsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingUpdateSettingsSecurity extends SpeakeasyBase {
    option1?: LoggingUpdateSettingsSecurityOption1;
    option2?: LoggingUpdateSettingsSecurityOption2;
}
export declare class LoggingUpdateSettingsRequest extends SpeakeasyBase {
    pathParams: LoggingUpdateSettingsPathParams;
    queryParams: LoggingUpdateSettingsQueryParams;
    request?: shared.Settings;
    security: LoggingUpdateSettingsSecurity;
}
export declare class LoggingUpdateSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settings?: shared.Settings;
    statusCode: number;
}
