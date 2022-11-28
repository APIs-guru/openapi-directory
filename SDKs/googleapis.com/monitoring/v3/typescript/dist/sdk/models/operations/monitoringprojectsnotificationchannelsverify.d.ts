import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsNotificationChannelsVerifyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsNotificationChannelsVerifyQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsNotificationChannelsVerifySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsVerifySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsVerifySecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsNotificationChannelsVerifySecurityOption1;
    option2?: MonitoringProjectsNotificationChannelsVerifySecurityOption2;
}
export declare class MonitoringProjectsNotificationChannelsVerifyRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsNotificationChannelsVerifyPathParams;
    queryParams: MonitoringProjectsNotificationChannelsVerifyQueryParams;
    request?: shared.VerifyNotificationChannelRequest;
    security: MonitoringProjectsNotificationChannelsVerifySecurity;
}
export declare class MonitoringProjectsNotificationChannelsVerifyResponse extends SpeakeasyBase {
    contentType: string;
    notificationChannel?: shared.NotificationChannel;
    statusCode: number;
}
