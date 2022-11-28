import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource
/** 
 * The GCP resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
**/
export class GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders?: string[];

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
