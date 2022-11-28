import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceCrowdingConfig
/** 
 * Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.
**/
export class SourceCrowdingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=numSuggestions" })
  numSuggestions?: number;
}
