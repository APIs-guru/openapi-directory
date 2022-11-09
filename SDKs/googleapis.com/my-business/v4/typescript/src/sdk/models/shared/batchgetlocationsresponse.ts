import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Location } from "./location";


// BatchGetLocationsResponse
/** 
 * Response message for Locations.BatchGetLocations.
**/
export class BatchGetLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations?: Location[];
}
