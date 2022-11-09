import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";


// GoogleCloudAssetV1p4beta1Access
/** 
 * An IAM role or permission under analysis.
**/
export class GoogleCloudAssetV1p4beta1Access extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisState" })
  analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}
