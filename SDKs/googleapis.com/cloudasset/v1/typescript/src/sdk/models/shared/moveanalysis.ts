import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MoveAnalysisResult } from "./moveanalysisresult";
import { Status } from "./status";


// MoveAnalysis
/** 
 * A message to group the analysis information.
**/
export class MoveAnalysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysis" })
  analysis?: MoveAnalysisResult;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;
}
