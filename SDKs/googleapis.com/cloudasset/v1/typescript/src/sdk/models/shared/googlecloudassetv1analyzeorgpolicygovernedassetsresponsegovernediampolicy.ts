import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy
/** 
 * The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
**/
export class GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachedResource" })
  attachedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders?: string[];

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
