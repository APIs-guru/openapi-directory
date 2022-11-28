import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyPathParams;
    queryParams: NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyQueryParams;
    security: NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
