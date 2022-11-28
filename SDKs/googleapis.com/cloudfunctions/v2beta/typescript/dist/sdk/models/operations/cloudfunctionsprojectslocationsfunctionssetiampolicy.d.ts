import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
