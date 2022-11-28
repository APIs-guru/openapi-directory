import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";



// GoogleCloudAssetV1p4beta1Access
/** 
 * An IAM role or permission under analysis.
**/
export class GoogleCloudAssetV1p4beta1Access extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisState" })
  analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
