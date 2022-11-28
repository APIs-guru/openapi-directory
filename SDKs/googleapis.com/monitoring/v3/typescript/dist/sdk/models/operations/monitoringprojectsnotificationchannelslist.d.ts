import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsNotificationChannelsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsNotificationChannelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsNotificationChannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsNotificationChannelsListSecurityOption1;
    option2?: MonitoringProjectsNotificationChannelsListSecurityOption2;
    option3?: MonitoringProjectsNotificationChannelsListSecurityOption3;
}
export declare class MonitoringProjectsNotificationChannelsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsNotificationChannelsListPathParams;
    queryParams: MonitoringProjectsNotificationChannelsListQueryParams;
    security: MonitoringProjectsNotificationChannelsListSecurity;
}
export declare class MonitoringProjectsNotificationChannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listNotificationChannelsResponse?: shared.ListNotificationChannelsResponse;
    statusCode: number;
}
