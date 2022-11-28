import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetLocationsRequest
/** 
 * Request message for Locations.BatchGetLocations.
**/
export class BatchGetLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationNames" })
  locationNames?: string[];
}
