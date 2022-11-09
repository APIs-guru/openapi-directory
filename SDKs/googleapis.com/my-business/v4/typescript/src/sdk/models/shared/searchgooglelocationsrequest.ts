import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// SearchGoogleLocationsRequest
/** 
 * Request message for GoogleLocations.SearchGoogleLocations.
**/
export class SearchGoogleLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=resultCount" })
  resultCount?: number;
}
