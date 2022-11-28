import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindMatchingLocationsRequest
/** 
 * Request message for Locations.FindMatchingLocations.
**/
export class FindMatchingLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=maxCacheDuration" })
  maxCacheDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=numResults" })
  numResults?: number;
}
