import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInvitation } from "./userinvitation";



// ListUserInvitationsResponse
/** 
 * Response message for UserInvitation listing request.
**/
export class ListUserInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userInvitations", elemType: UserInvitation })
  userInvitations?: UserInvitation[];
}
