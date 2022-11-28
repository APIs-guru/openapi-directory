import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsNotificationChannelsCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsNotificationChannelsCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsNotificationChannelsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsNotificationChannelsCreateSecurityOption1;
    option2?: MonitoringProjectsNotificationChannelsCreateSecurityOption2;
}
export declare class MonitoringProjectsNotificationChannelsCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsNotificationChannelsCreatePathParams;
    queryParams: MonitoringProjectsNotificationChannelsCreateQueryParams;
    request?: shared.NotificationChannel;
    security: MonitoringProjectsNotificationChannelsCreateSecurity;
}
export declare class MonitoringProjectsNotificationChannelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    notificationChannel?: shared.NotificationChannel;
    statusCode: number;
}
