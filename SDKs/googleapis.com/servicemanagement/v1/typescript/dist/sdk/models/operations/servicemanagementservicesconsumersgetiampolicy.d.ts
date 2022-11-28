import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesConsumersGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicemanagementServicesConsumersGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesConsumersGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersGetIamPolicySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersGetIamPolicySecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesConsumersGetIamPolicySecurityOption1;
    option2?: ServicemanagementServicesConsumersGetIamPolicySecurityOption2;
    option3?: ServicemanagementServicesConsumersGetIamPolicySecurityOption3;
    option4?: ServicemanagementServicesConsumersGetIamPolicySecurityOption4;
}
export declare class ServicemanagementServicesConsumersGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesConsumersGetIamPolicyPathParams;
    queryParams: ServicemanagementServicesConsumersGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: ServicemanagementServicesConsumersGetIamPolicySecurity;
}
export declare class ServicemanagementServicesConsumersGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
