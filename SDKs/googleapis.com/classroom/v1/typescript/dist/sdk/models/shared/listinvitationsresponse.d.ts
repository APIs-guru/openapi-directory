import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Invitation } from "./invitation";
/**
 * Response when listing invitations.
**/
export declare class ListInvitationsResponse extends SpeakeasyBase {
    invitations?: Invitation[];
    nextPageToken?: string;
}
