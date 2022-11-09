import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";


// GoogleCloudAssetV1p4beta1Resource
/** 
 * A Google Cloud resource under analysis.
**/
export class GoogleCloudAssetV1p4beta1Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisState" })
  analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
