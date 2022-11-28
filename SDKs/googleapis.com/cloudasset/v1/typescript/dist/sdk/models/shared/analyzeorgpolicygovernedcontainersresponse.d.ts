import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { GoogleCloudAssetV1GovernedContainer } from "./googlecloudassetv1governedcontainer";
/**
 * The response message for AssetService.AnalyzeOrgPolicyGovernedContainers.
**/
export declare class AnalyzeOrgPolicyGovernedContainersResponse extends SpeakeasyBase {
    constraint?: AnalyzerOrgPolicyConstraint;
    governedContainers?: GoogleCloudAssetV1GovernedContainer[];
    nextPageToken?: string;
}
