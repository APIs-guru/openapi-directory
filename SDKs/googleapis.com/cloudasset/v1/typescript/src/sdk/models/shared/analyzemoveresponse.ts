import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoveAnalysis } from "./moveanalysis";



// AnalyzeMoveResponse
/** 
 * The response message for resource move analysis.
**/
export class AnalyzeMoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=moveAnalysis", elemType: MoveAnalysis })
  moveAnalysis?: MoveAnalysis[];
}
