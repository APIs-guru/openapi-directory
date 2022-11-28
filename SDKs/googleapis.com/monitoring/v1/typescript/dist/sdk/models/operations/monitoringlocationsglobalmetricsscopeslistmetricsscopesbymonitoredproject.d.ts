import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    monitoredResourceContainer?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity extends SpeakeasyBase {
    option1?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1;
    option2?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2;
    option3?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3;
}
export declare class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest extends SpeakeasyBase {
    queryParams: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams;
    security: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity;
}
export declare class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse extends SpeakeasyBase {
    contentType: string;
    listMetricsScopesByMonitoredProjectResponse?: shared.ListMetricsScopesByMonitoredProjectResponse;
    statusCode: number;
}
