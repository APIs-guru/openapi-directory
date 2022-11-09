import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// SearchGoogleLocationsRequest
/** 
 * Request message for GoogleLocations.SearchGoogleLocations.
**/
export class SearchGoogleLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=query" })
  query?: string;
}
