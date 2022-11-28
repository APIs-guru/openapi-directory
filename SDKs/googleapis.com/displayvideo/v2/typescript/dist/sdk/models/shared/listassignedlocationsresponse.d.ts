import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocation } from "./assignedlocation";
/**
 * Response message for AssignedLocationService.ListAssignedLocations.
**/
export declare class ListAssignedLocationsResponse extends SpeakeasyBase {
    assignedLocations?: AssignedLocation[];
    nextPageToken?: string;
}
