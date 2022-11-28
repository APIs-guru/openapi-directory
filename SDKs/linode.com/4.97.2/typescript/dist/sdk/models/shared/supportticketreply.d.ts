import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing a reply to a Support Ticket.
 *
**/
export declare class SupportTicketReply extends SpeakeasyBase {
    created?: Date;
    createdBy?: string;
    description?: string;
    fromLinode?: boolean;
    gravatarId?: string;
    id?: number;
}
