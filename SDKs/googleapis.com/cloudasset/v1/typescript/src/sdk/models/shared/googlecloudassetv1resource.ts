import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";



// GoogleCloudAssetV1Resource
/** 
 * A Google Cloud resource under analysis.
**/
export class GoogleCloudAssetV1Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisState" })
  analysisState?: IamPolicyAnalysisState;

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
