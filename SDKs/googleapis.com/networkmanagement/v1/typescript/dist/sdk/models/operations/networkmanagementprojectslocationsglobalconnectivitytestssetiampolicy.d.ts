import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyPathParams;
    queryParams: NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity;
}
export declare class NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
