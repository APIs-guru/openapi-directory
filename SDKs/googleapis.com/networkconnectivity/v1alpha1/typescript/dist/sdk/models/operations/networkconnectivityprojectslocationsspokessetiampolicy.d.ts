import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsSpokesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsSpokesSetIamPolicyPathParams;
    queryParams: NetworkconnectivityProjectsLocationsSpokesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity;
}
export declare class NetworkconnectivityProjectsLocationsSpokesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
