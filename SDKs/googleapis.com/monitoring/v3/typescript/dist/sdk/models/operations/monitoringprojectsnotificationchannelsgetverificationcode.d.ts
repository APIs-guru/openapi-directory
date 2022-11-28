import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsNotificationChannelsGetVerificationCodePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1;
    option2?: MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2;
}
export declare class MonitoringProjectsNotificationChannelsGetVerificationCodeRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsNotificationChannelsGetVerificationCodePathParams;
    queryParams: MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams;
    request?: shared.GetNotificationChannelVerificationCodeRequest;
    security: MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity;
}
export declare class MonitoringProjectsNotificationChannelsGetVerificationCodeResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationChannelVerificationCodeResponse?: shared.GetNotificationChannelVerificationCodeResponse;
    statusCode: number;
}
