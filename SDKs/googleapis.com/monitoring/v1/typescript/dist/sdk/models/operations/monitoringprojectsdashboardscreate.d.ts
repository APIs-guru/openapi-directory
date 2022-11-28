import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsDashboardsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringProjectsDashboardsCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsDashboardsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsDashboardsCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsDashboardsCreateSecurityOption1;
    option2?: MonitoringProjectsDashboardsCreateSecurityOption2;
    option3?: MonitoringProjectsDashboardsCreateSecurityOption3;
}
export declare class MonitoringProjectsDashboardsCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsDashboardsCreatePathParams;
    queryParams: MonitoringProjectsDashboardsCreateQueryParams;
    request?: shared.Dashboard;
    security: MonitoringProjectsDashboardsCreateSecurity;
}
export declare class MonitoringProjectsDashboardsCreateResponse extends SpeakeasyBase {
    contentType: string;
    dashboard?: shared.Dashboard;
    statusCode: number;
}
