import { SpeakeasyBase } from "../../../internal/utils";
import { InboundSsoAssignment } from "./inboundssoassignment";
/**
 * Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
**/
export declare class ListInboundSsoAssignmentsResponse extends SpeakeasyBase {
    inboundSsoAssignments?: InboundSsoAssignment[];
    nextPageToken?: string;
}
