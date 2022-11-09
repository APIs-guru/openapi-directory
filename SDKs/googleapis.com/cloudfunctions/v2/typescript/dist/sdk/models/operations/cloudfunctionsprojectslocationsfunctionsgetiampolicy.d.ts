import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams;
    security: CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
