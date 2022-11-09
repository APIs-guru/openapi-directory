import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedLocation } from "./assignedlocation";


// BulkEditAssignedLocationsRequest
/** 
 * Request message for AssignedLocationService.BulkEditAssignedLocations.
**/
export class BulkEditAssignedLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAssignedLocations", elemType: shared.AssignedLocation })
  createdAssignedLocations?: AssignedLocation[];

  @Metadata({ data: "json, name=deletedAssignedLocations" })
  deletedAssignedLocations?: string[];
}
