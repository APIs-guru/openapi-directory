import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingGetCmekSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingGetCmekSettingsQueryParams extends SpeakeasyBase {
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
export declare class LoggingGetCmekSettingsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetCmekSettingsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetCmekSettingsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetCmekSettingsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingGetCmekSettingsSecurity extends SpeakeasyBase {
    option1?: LoggingGetCmekSettingsSecurityOption1;
    option2?: LoggingGetCmekSettingsSecurityOption2;
    option3?: LoggingGetCmekSettingsSecurityOption3;
    option4?: LoggingGetCmekSettingsSecurityOption4;
}
export declare class LoggingGetCmekSettingsRequest extends SpeakeasyBase {
    pathParams: LoggingGetCmekSettingsPathParams;
    queryParams: LoggingGetCmekSettingsQueryParams;
    security: LoggingGetCmekSettingsSecurity;
}
export declare class LoggingGetCmekSettingsResponse extends SpeakeasyBase {
    cmekSettings?: shared.CmekSettings;
    contentType: string;
    statusCode: number;
}
