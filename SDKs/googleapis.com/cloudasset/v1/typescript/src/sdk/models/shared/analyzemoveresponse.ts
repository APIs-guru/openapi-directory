import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MoveAnalysis } from "./moveanalysis";


// AnalyzeMoveResponse
/** 
 * The response message for resource move analysis.
**/
export class AnalyzeMoveResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=moveAnalysis", elemType: shared.MoveAnalysis })
  moveAnalysis?: MoveAnalysis[];
}
