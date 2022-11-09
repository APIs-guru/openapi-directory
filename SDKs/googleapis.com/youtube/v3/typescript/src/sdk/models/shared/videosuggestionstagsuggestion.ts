import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoSuggestionsTagSuggestion
/** 
 * A single tag suggestion with it's relevance information.
**/
export class VideoSuggestionsTagSuggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryRestricts" })
  categoryRestricts?: string[];

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
