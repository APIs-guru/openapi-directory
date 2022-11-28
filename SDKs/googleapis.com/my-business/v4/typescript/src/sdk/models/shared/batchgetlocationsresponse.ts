import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// BatchGetLocationsResponse
/** 
 * Response message for Locations.BatchGetLocations.
**/
export class BatchGetLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];
}
