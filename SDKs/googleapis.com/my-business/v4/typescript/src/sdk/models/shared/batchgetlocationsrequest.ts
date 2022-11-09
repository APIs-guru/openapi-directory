import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetLocationsRequest
/** 
 * Request message for Locations.BatchGetLocations.
**/
export class BatchGetLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationNames" })
  locationNames?: string[];
}
