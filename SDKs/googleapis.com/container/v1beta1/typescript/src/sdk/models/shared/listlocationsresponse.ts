import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// ListLocationsResponse
/** 
 * ListLocationsResponse returns the list of all GKE locations and their recommendation state.
**/
export class ListLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
