import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoSuggestionsTagSuggestion
/** 
 * A single tag suggestion with it's relevance information.
**/
export class VideoSuggestionsTagSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRestricts" })
  categoryRestricts?: string[];

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
