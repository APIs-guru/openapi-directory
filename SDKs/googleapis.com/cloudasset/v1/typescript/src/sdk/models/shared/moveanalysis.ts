import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoveAnalysisResult } from "./moveanalysisresult";
import { Status } from "./status";



// MoveAnalysis
/** 
 * A message to group the analysis information.
**/
export class MoveAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysis" })
  analysis?: MoveAnalysisResult;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;
}
