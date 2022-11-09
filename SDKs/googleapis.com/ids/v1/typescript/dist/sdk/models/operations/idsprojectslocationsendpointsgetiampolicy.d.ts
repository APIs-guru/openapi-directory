import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsEndpointsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IdsProjectsLocationsEndpointsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IdsProjectsLocationsEndpointsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsEndpointsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsEndpointsGetIamPolicyPathParams;
    queryParams: IdsProjectsLocationsEndpointsGetIamPolicyQueryParams;
    security: IdsProjectsLocationsEndpointsGetIamPolicySecurity;
}
export declare class IdsProjectsLocationsEndpointsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
