import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnalysisCompleted
/** 
 * Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
**/
export class AnalysisCompleted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisType" })
  analysisType?: string[];
}
