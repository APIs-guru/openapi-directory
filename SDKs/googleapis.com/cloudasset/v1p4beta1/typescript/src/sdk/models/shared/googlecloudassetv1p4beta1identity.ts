import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";



// GoogleCloudAssetV1p4beta1Identity
/** 
 * An identity under analysis.
**/
export class GoogleCloudAssetV1p4beta1Identity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisState" })
  analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
