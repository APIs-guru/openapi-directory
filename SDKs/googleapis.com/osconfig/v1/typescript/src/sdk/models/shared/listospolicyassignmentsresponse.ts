import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignment } from "./ospolicyassignment";


// ListOsPolicyAssignmentsResponse
/** 
 * A response message for listing all assignments under given parent.
**/
export class ListOsPolicyAssignmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=osPolicyAssignments", elemType: shared.OsPolicyAssignment })
  osPolicyAssignments?: OsPolicyAssignment[];
}
