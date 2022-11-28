import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetAnalyzeIamPolicyPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetAnalyzeIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    analysisQueryAccessSelectorPermissions?: string[];
    analysisQueryAccessSelectorRoles?: string[];
    analysisQueryConditionContextAccessTime?: string;
    analysisQueryIdentitySelectorIdentity?: string;
    analysisQueryOptionsAnalyzeServiceAccountImpersonation?: boolean;
    analysisQueryOptionsExpandGroups?: boolean;
    analysisQueryOptionsExpandResources?: boolean;
    analysisQueryOptionsExpandRoles?: boolean;
    analysisQueryOptionsOutputGroupEdges?: boolean;
    analysisQueryOptionsOutputResourceEdges?: boolean;
    analysisQueryResourceSelectorFullResourceName?: string;
    callback?: string;
    executionTimeout?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    savedAnalysisQuery?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetAnalyzeIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetAnalyzeIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudassetAnalyzeIamPolicyPathParams;
    queryParams: CloudassetAnalyzeIamPolicyQueryParams;
    security: CloudassetAnalyzeIamPolicySecurity;
}
export declare class CloudassetAnalyzeIamPolicyResponse extends SpeakeasyBase {
    analyzeIamPolicyResponse?: shared.AnalyzeIamPolicyResponse;
    contentType: string;
    statusCode: number;
}
