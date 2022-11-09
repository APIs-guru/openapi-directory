import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindMatchingLocationsRequest
/** 
 * Request message for Locations.FindMatchingLocations.
**/
export class FindMatchingLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=maxCacheDuration" })
  maxCacheDuration?: string;

  @Metadata({ data: "json, name=numResults" })
  numResults?: number;
}
