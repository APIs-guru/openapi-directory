import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocationInput } from "./assignedlocation";
/**
 * Request message for AssignedLocationService.BulkEditAssignedLocations.
**/
export declare class BulkEditAssignedLocationsRequestInput extends SpeakeasyBase {
    createdAssignedLocations?: AssignedLocationInput[];
    deletedAssignedLocations?: string[];
}
