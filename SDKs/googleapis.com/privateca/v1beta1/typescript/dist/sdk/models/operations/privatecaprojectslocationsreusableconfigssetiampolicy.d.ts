import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams;
    queryParams: PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity;
}
export declare class PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
