import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignment } from "./ospolicyassignment";


// ListOsPolicyAssignmentRevisionsResponse
/** 
 * A response message for listing all revisions for a OS policy assignment.
**/
export class ListOsPolicyAssignmentRevisionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=osPolicyAssignments", elemType: shared.OsPolicyAssignment })
  osPolicyAssignments?: OsPolicyAssignment[];
}
