import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingUpdateCmekSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingUpdateCmekSettingsQueryParams extends SpeakeasyBase {
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
export declare class LoggingUpdateCmekSettingsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingUpdateCmekSettingsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingUpdateCmekSettingsSecurity extends SpeakeasyBase {
    option1?: LoggingUpdateCmekSettingsSecurityOption1;
    option2?: LoggingUpdateCmekSettingsSecurityOption2;
}
export declare class LoggingUpdateCmekSettingsRequest extends SpeakeasyBase {
    pathParams: LoggingUpdateCmekSettingsPathParams;
    queryParams: LoggingUpdateCmekSettingsQueryParams;
    request?: shared.CmekSettingsInput;
    security: LoggingUpdateCmekSettingsSecurity;
}
export declare class LoggingUpdateCmekSettingsResponse extends SpeakeasyBase {
    cmekSettings?: shared.CmekSettings;
    contentType: string;
    statusCode: number;
}
