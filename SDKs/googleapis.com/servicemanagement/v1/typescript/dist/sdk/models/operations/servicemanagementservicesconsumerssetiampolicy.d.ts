import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesConsumersSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicemanagementServicesConsumersSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesConsumersSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersSetIamPolicySecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesConsumersSetIamPolicySecurityOption1;
    option2?: ServicemanagementServicesConsumersSetIamPolicySecurityOption2;
}
export declare class ServicemanagementServicesConsumersSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesConsumersSetIamPolicyPathParams;
    queryParams: ServicemanagementServicesConsumersSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ServicemanagementServicesConsumersSetIamPolicySecurity;
}
export declare class ServicemanagementServicesConsumersSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
