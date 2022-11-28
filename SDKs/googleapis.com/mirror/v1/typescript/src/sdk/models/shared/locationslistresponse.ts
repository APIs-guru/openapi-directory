import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// LocationsListResponse
/** 
 * A list of Locations. This is the response from the server to GET requests on the locations collection.
**/
export class LocationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Location })
  items?: Location[];

  @SpeakeasyMetadata()
  kind?: string;
}
