import { SpeakeasyBase } from "../../../internal/utils";
import { UserInvitation } from "./userinvitation";
/**
 * Response message for UserInvitation listing request.
**/
export declare class ListUserInvitationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    userInvitations?: UserInvitation[];
}
