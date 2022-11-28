import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Score } from "./score";



// SpanScore
/** 
 * This is a single score for a given span of text.
**/
export class SpanScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=begin" })
  begin?: number;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: Score;
}
