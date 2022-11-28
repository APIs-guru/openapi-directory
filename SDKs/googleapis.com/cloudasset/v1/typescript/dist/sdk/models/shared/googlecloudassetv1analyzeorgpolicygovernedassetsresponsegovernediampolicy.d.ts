import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
**/
export declare class GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy extends SpeakeasyBase {
    attachedResource?: string;
    folders?: string[];
    organization?: string;
    policy?: Policy;
    project?: string;
}
