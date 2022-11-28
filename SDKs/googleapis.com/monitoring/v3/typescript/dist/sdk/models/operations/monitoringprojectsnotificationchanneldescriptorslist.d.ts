import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsNotificationChannelDescriptorsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1;
    option2?: MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2;
    option3?: MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsNotificationChannelDescriptorsListPathParams;
    queryParams: MonitoringProjectsNotificationChannelDescriptorsListQueryParams;
    security: MonitoringProjectsNotificationChannelDescriptorsListSecurity;
}
export declare class MonitoringProjectsNotificationChannelDescriptorsListResponse extends SpeakeasyBase {
    contentType: string;
    listNotificationChannelDescriptorsResponse?: shared.ListNotificationChannelDescriptorsResponse;
    statusCode: number;
}
