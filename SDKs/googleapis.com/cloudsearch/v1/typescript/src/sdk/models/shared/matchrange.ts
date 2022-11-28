import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MatchRange
/** 
 * Matched range of a snippet [start, end).
**/
export class MatchRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
