import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocationInput } from "./assignedlocation";



// BulkEditAssignedLocationsRequestInput
/** 
 * Request message for AssignedLocationService.BulkEditAssignedLocations.
**/
export class BulkEditAssignedLocationsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAssignedLocations", elemType: AssignedLocationInput })
  createdAssignedLocations?: AssignedLocationInput[];

  @SpeakeasyMetadata({ data: "json, name=deletedAssignedLocations" })
  deletedAssignedLocations?: string[];
}
