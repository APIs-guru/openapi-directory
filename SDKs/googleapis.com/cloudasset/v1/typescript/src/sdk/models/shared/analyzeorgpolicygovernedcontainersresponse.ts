import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { GoogleCloudAssetV1GovernedContainer } from "./googlecloudassetv1governedcontainer";



// AnalyzeOrgPolicyGovernedContainersResponse
/** 
 * The response message for AssetService.AnalyzeOrgPolicyGovernedContainers.
**/
export class AnalyzeOrgPolicyGovernedContainersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: AnalyzerOrgPolicyConstraint;

  @SpeakeasyMetadata({ data: "json, name=governedContainers", elemType: GoogleCloudAssetV1GovernedContainer })
  governedContainers?: GoogleCloudAssetV1GovernedContainer[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
