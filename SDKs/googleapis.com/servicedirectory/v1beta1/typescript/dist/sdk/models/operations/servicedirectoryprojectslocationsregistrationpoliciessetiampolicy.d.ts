import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams;
    queryParams: ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
