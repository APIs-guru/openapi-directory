import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedLocation } from "./assignedlocation";


// ListAssignedLocationsResponse
/** 
 * Response message for AssignedLocationService.ListAssignedLocations.
**/
export class ListAssignedLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedLocations", elemType: shared.AssignedLocation })
  assignedLocations?: AssignedLocation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
