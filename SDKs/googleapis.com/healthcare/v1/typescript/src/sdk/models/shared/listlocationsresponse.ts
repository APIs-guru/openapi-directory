import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// ListLocationsResponse
/** 
 * The response message for Locations.ListLocations.
**/
export class ListLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
