import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedLocation } from "./assignedlocation";


// BulkEditAssignedLocationsResponse
/** 
 * Response message for AssignedLocationService.BulkEditAssignedLocations.
**/
export class BulkEditAssignedLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedLocations", elemType: shared.AssignedLocation })
  assignedLocations?: AssignedLocation[];
}
