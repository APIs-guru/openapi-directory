import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InboundSsoAssignment } from "./inboundssoassignment";



// ListInboundSsoAssignmentsResponse
/** 
 * Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
**/
export class ListInboundSsoAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inboundSsoAssignments", elemType: InboundSsoAssignment })
  inboundSsoAssignments?: InboundSsoAssignment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
