import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsEndpointsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IdsProjectsLocationsEndpointsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IdsProjectsLocationsEndpointsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsEndpointsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsEndpointsSetIamPolicyPathParams;
    queryParams: IdsProjectsLocationsEndpointsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: IdsProjectsLocationsEndpointsSetIamPolicySecurity;
}
export declare class IdsProjectsLocationsEndpointsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
