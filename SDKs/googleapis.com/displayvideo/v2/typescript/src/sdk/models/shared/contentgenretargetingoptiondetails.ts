import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContentGenreTargetingOptionDetails
/** 
 * Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.
**/
export class ContentGenreTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
