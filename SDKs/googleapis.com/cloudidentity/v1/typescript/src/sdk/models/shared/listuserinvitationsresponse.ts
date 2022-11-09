import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserInvitation } from "./userinvitation";


// ListUserInvitationsResponse
/** 
 * Response message for UserInvitation listing request.
**/
export class ListUserInvitationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=userInvitations", elemType: shared.UserInvitation })
  userInvitations?: UserInvitation[];
}
