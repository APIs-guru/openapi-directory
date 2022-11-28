import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsAlertPoliciesListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsAlertPoliciesListQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsAlertPoliciesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsAlertPoliciesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsAlertPoliciesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsAlertPoliciesListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsAlertPoliciesListSecurityOption1;
    option2?: MonitoringProjectsAlertPoliciesListSecurityOption2;
    option3?: MonitoringProjectsAlertPoliciesListSecurityOption3;
}
export declare class MonitoringProjectsAlertPoliciesListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsAlertPoliciesListPathParams;
    queryParams: MonitoringProjectsAlertPoliciesListQueryParams;
    security: MonitoringProjectsAlertPoliciesListSecurity;
}
export declare class MonitoringProjectsAlertPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listAlertPoliciesResponse?: shared.ListAlertPoliciesResponse;
    statusCode: number;
}
