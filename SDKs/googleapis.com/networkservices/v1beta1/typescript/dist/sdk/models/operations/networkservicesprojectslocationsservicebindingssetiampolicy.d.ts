import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyPathParams;
    queryParams: NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
