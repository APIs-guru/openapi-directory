import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingGetSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingGetSettingsQueryParams extends SpeakeasyBase {
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
export declare class LoggingGetSettingsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetSettingsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetSettingsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetSettingsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetSettingsSecurity extends SpeakeasyBase {
    option1?: LoggingGetSettingsSecurityOption1;
    option2?: LoggingGetSettingsSecurityOption2;
    option3?: LoggingGetSettingsSecurityOption3;
    option4?: LoggingGetSettingsSecurityOption4;
}
export declare class LoggingGetSettingsRequest extends SpeakeasyBase {
    pathParams: LoggingGetSettingsPathParams;
    queryParams: LoggingGetSettingsQueryParams;
    security: LoggingGetSettingsSecurity;
}
export declare class LoggingGetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settings?: shared.Settings;
    statusCode: number;
}
