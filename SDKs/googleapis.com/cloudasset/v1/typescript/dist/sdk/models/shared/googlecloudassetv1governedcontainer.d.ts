import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";
/**
 * The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint.
**/
export declare class GoogleCloudAssetV1GovernedContainer extends SpeakeasyBase {
    consolidatedPolicy?: AnalyzerOrgPolicy;
    fullResourceName?: string;
    parent?: string;
    policyBundle?: AnalyzerOrgPolicy[];
}
