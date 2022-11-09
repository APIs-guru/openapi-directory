import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnalysisCompleted
/** 
 * Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
**/
export class AnalysisCompleted extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisType" })
  analysisType?: string[];
}
