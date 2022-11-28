import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endpointPolicyId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams;
    queryParams: NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams;
    request?: shared.EndpointPolicyInput;
    security: NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity;
}
export declare class NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
