import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignment } from "./ospolicyassignment";
/**
 * A response message for listing all revisions for a OS policy assignment.
**/
export declare class ListOsPolicyAssignmentRevisionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    osPolicyAssignments?: OsPolicyAssignment[];
}
