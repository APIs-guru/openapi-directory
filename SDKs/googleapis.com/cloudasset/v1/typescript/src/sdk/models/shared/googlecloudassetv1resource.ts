import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";


// GoogleCloudAssetV1Resource
/** 
 * A Google Cloud resource under analysis.
**/
export class GoogleCloudAssetV1Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisState" })
  analysisState?: IamPolicyAnalysisState;

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
