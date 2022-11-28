import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";



// GoogleCloudAssetV1Identity
/** 
 * An identity under analysis.
**/
export class GoogleCloudAssetV1Identity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisState" })
  analysisState?: IamPolicyAnalysisState;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
