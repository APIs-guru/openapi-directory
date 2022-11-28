import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsAlertPoliciesCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsAlertPoliciesCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsAlertPoliciesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsAlertPoliciesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsAlertPoliciesCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsAlertPoliciesCreateSecurityOption1;
    option2?: MonitoringProjectsAlertPoliciesCreateSecurityOption2;
}
export declare class MonitoringProjectsAlertPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsAlertPoliciesCreatePathParams;
    queryParams: MonitoringProjectsAlertPoliciesCreateQueryParams;
    request?: shared.AlertPolicy;
    security: MonitoringProjectsAlertPoliciesCreateSecurity;
}
export declare class MonitoringProjectsAlertPoliciesCreateResponse extends SpeakeasyBase {
    alertPolicy?: shared.AlertPolicy;
    contentType: string;
    statusCode: number;
}
