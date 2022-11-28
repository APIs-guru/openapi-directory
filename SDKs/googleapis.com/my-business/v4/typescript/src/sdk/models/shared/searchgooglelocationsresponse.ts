import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleLocation } from "./googlelocation";



// SearchGoogleLocationsResponse
/** 
 * Response message for GoogleLocations.SearchGoogleLocations.
**/
export class SearchGoogleLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleLocations", elemType: GoogleLocation })
  googleLocations?: GoogleLocation[];
}
