import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    authorizationPolicyId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams;
    queryParams: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams;
    request?: shared.AuthorizationPolicy;
    security: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity;
}
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
