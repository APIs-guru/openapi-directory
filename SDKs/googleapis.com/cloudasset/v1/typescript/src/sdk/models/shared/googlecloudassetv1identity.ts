import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";


// GoogleCloudAssetV1Identity
/** 
 * An identity under analysis.
**/
export class GoogleCloudAssetV1Identity extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisState" })
  analysisState?: IamPolicyAnalysisState;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
