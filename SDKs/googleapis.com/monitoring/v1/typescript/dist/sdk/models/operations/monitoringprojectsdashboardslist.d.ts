import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsDashboardsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringProjectsDashboardsListQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsDashboardsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsDashboardsListSecurityOption1;
    option2?: MonitoringProjectsDashboardsListSecurityOption2;
    option3?: MonitoringProjectsDashboardsListSecurityOption3;
}
export declare class MonitoringProjectsDashboardsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsDashboardsListPathParams;
    queryParams: MonitoringProjectsDashboardsListQueryParams;
    security: MonitoringProjectsDashboardsListSecurity;
}
export declare class MonitoringProjectsDashboardsListResponse extends SpeakeasyBase {
    contentType: string;
    listDashboardsResponse?: shared.ListDashboardsResponse;
    statusCode: number;
}
