import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MatchRange
/** 
 * Matched range of a snippet [start, end).
**/
export class MatchRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
