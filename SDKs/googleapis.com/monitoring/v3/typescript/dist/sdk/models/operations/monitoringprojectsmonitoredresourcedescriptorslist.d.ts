import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsMonitoredResourceDescriptorsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1;
    option2?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2;
    option3?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3;
    option4?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsMonitoredResourceDescriptorsListPathParams;
    queryParams: MonitoringProjectsMonitoredResourceDescriptorsListQueryParams;
    security: MonitoringProjectsMonitoredResourceDescriptorsListSecurity;
}
export declare class MonitoringProjectsMonitoredResourceDescriptorsListResponse extends SpeakeasyBase {
    contentType: string;
    listMonitoredResourceDescriptorsResponse?: shared.ListMonitoredResourceDescriptorsResponse;
    statusCode: number;
}
