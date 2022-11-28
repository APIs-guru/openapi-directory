import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamIamPoliciesLintPolicyQueryParams extends SpeakeasyBase {
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
export declare class IamIamPoliciesLintPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamIamPoliciesLintPolicyRequest extends SpeakeasyBase {
    queryParams: IamIamPoliciesLintPolicyQueryParams;
    request?: shared.LintPolicyRequest;
    security: IamIamPoliciesLintPolicySecurity;
}
export declare class IamIamPoliciesLintPolicyResponse extends SpeakeasyBase {
    contentType: string;
    lintPolicyResponse?: shared.LintPolicyResponse;
    statusCode: number;
}
