import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GuardianInvitation } from "./guardianinvitation";
/**
 * Response when listing guardian invitations.
**/
export declare class ListGuardianInvitationsResponse extends SpeakeasyBase {
    guardianInvitations?: GuardianInvitation[];
    nextPageToken?: string;
}
