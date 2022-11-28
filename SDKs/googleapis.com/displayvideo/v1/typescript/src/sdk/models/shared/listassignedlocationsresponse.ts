import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocation } from "./assignedlocation";



// ListAssignedLocationsResponse
/** 
 * Response message for AssignedLocationService.ListAssignedLocations.
**/
export class ListAssignedLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedLocations", elemType: AssignedLocation })
  assignedLocations?: AssignedLocation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
