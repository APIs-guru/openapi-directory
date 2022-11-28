import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsDashboardsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsDashboardsGetQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsDashboardsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsGetSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsDashboardsGetSecurityOption1;
    option2?: MonitoringProjectsDashboardsGetSecurityOption2;
    option3?: MonitoringProjectsDashboardsGetSecurityOption3;
}
export declare class MonitoringProjectsDashboardsGetRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsDashboardsGetPathParams;
    queryParams: MonitoringProjectsDashboardsGetQueryParams;
    security: MonitoringProjectsDashboardsGetSecurity;
}
export declare class MonitoringProjectsDashboardsGetResponse extends SpeakeasyBase {
    contentType: string;
    dashboard?: shared.Dashboard;
    statusCode: number;
}
