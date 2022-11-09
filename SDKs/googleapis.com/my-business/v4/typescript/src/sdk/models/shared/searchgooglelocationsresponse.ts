import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleLocation } from "./googlelocation";


// SearchGoogleLocationsResponse
/** 
 * Response message for GoogleLocations.SearchGoogleLocations.
**/
export class SearchGoogleLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleLocations", elemType: shared.GoogleLocation })
  googleLocations?: GoogleLocation[];
}
