import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InboundSsoAssignment } from "./inboundssoassignment";


// ListInboundSsoAssignmentsResponse
/** 
 * Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
**/
export class ListInboundSsoAssignmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inboundSsoAssignments", elemType: shared.InboundSsoAssignment })
  inboundSsoAssignments?: InboundSsoAssignment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
