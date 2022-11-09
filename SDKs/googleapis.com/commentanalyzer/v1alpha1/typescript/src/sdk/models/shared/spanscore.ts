import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Score } from "./score";


// SpanScore
/** 
 * This is a single score for a given span of text.
**/
export class SpanScore extends SpeakeasyBase {
  @Metadata({ data: "json, name=begin" })
  begin?: number;

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=score" })
  score?: Score;
}
