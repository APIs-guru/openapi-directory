import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Invitation } from "./invitation";
/**
 * Response message for AccessControl.ListInvitations.
**/
export declare class ListInvitationsResponse extends SpeakeasyBase {
    invitations?: Invitation[];
}
