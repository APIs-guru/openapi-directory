import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";


// GoogleCloudAssetV1p4beta1Identity
/** 
 * An identity under analysis.
**/
export class GoogleCloudAssetV1p4beta1Identity extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisState" })
  analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
