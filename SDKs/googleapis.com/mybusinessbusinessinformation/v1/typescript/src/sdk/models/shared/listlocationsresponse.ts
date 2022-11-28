import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// ListLocationsResponse
/** 
 * Response message for Locations.ListLocations.
**/
export class ListLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
