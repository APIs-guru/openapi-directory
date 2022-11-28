import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams;
    queryParams: PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams;
    security: PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity;
}
export declare class PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
