import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignment } from "./ospolicyassignment";



// ListOsPolicyAssignmentsResponse
/** 
 * A response message for listing all assignments under given parent.
**/
export class ListOsPolicyAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyAssignments", elemType: OsPolicyAssignment })
  osPolicyAssignments?: OsPolicyAssignment[];
}
