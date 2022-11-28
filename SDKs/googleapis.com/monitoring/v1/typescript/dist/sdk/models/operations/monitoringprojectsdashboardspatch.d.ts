import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsDashboardsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsDashboardsPatchQueryParams extends SpeakeasyBase {
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
    validateOnly?: boolean;
}
export declare class MonitoringProjectsDashboardsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsPatchSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsDashboardsPatchSecurityOption1;
    option2?: MonitoringProjectsDashboardsPatchSecurityOption2;
    option3?: MonitoringProjectsDashboardsPatchSecurityOption3;
}
export declare class MonitoringProjectsDashboardsPatchRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsDashboardsPatchPathParams;
    queryParams: MonitoringProjectsDashboardsPatchQueryParams;
    request?: shared.Dashboard;
    security: MonitoringProjectsDashboardsPatchSecurity;
}
export declare class MonitoringProjectsDashboardsPatchResponse extends SpeakeasyBase {
    contentType: string;
    dashboard?: shared.Dashboard;
    statusCode: number;
}
