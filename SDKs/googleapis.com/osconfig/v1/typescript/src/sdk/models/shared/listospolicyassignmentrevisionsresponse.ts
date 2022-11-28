import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignment } from "./ospolicyassignment";



// ListOsPolicyAssignmentRevisionsResponse
/** 
 * A response message for listing all revisions for a OS policy assignment.
**/
export class ListOsPolicyAssignmentRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyAssignments", elemType: OsPolicyAssignment })
  osPolicyAssignments?: OsPolicyAssignment[];
}
