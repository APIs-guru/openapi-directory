import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SpanScore } from "./spanscore";
import { Score } from "./score";


// AttributeScores
/** 
 * This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
**/
export class AttributeScores extends SpeakeasyBase {
  @Metadata({ data: "json, name=spanScores", elemType: shared.SpanScore })
  spanScores?: SpanScore[];

  @Metadata({ data: "json, name=summaryScore" })
  summaryScore?: Score;
}
