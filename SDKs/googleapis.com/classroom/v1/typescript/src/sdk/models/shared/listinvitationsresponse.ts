import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";



// ListInvitationsResponse
/** 
 * Response when listing invitations.
**/
export class ListInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitations", elemType: Invitation })
  invitations?: Invitation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
