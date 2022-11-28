import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1;
    option2?: MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2;
    option3?: MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3;
}
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams;
    queryParams: MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams;
    request?: shared.MonitoredProjectInput;
    security: MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity;
}
export declare class MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
