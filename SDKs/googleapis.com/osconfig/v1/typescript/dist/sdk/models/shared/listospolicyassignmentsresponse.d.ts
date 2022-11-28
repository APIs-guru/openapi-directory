import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignment } from "./ospolicyassignment";
/**
 * A response message for listing all assignments under given parent.
**/
export declare class ListOsPolicyAssignmentsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    osPolicyAssignments?: OsPolicyAssignment[];
}
