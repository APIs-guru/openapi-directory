import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsNotificationChannelsSendVerificationCodePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsNotificationChannelsSendVerificationCodeQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1;
    option2?: MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption2;
}
export declare class MonitoringProjectsNotificationChannelsSendVerificationCodeRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsNotificationChannelsSendVerificationCodePathParams;
    queryParams: MonitoringProjectsNotificationChannelsSendVerificationCodeQueryParams;
    request?: Map<string, any>;
    security: MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity;
}
export declare class MonitoringProjectsNotificationChannelsSendVerificationCodeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
