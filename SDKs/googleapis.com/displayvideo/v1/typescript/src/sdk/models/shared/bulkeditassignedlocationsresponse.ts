import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocation } from "./assignedlocation";



// BulkEditAssignedLocationsResponse
/** 
 * Response message for AssignedLocationService.BulkEditAssignedLocations.
**/
export class BulkEditAssignedLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedLocations", elemType: AssignedLocation })
  assignedLocations?: AssignedLocation[];
}
