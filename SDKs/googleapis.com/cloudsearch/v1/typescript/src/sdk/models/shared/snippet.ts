import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";



// Snippet
/** 
 * Snippet of the search result, which summarizes the content of the resulting page.
**/
export class Snippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchRanges", elemType: MatchRange })
  matchRanges?: MatchRange[];

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;
}
