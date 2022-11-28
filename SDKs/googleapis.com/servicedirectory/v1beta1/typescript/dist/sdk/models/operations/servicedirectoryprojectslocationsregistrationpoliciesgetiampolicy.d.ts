import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyPathParams;
    queryParams: ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicySecurity;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
