import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyPathParams;
    queryParams: NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
