import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";



// GoogleCloudAssetV1Access
/** 
 * An IAM role or permission under analysis.
**/
export class GoogleCloudAssetV1Access extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisState" })
  analysisState?: IamPolicyAnalysisState;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
