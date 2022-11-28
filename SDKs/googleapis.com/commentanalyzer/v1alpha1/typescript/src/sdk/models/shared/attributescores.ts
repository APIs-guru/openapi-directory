import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpanScore } from "./spanscore";
import { Score } from "./score";



// AttributeScores
/** 
 * This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
**/
export class AttributeScores extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spanScores", elemType: SpanScore })
  spanScores?: SpanScore[];

  @SpeakeasyMetadata({ data: "json, name=summaryScore" })
  summaryScore?: Score;
}
