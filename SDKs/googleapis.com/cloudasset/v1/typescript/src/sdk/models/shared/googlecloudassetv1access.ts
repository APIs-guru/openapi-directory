import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";


// GoogleCloudAssetV1Access
/** 
 * An IAM role or permission under analysis.
**/
export class GoogleCloudAssetV1Access extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisState" })
  analysisState?: IamPolicyAnalysisState;

  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}
