import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchRange } from "./matchrange";


// Snippet
/** 
 * Snippet of the search result, which summarizes the content of the resulting page.
**/
export class Snippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchRanges", elemType: shared.MatchRange })
  matchRanges?: MatchRange[];

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;
}
