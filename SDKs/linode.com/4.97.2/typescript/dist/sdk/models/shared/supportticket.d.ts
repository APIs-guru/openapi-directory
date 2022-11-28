import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The entity this Ticket was opened for.
 *
**/
export declare class SupportTicketEntity extends SpeakeasyBase {
    id?: number;
    label?: string;
    type?: string;
    url?: string;
}
export declare enum SupportTicketStatusEnum {
    Closed = "closed",
    New = "new",
    Open = "open"
}
/**
 * A Support Ticket opened on your Account.
 *
**/
export declare class SupportTicket extends SpeakeasyBase {
    attachments?: string[];
    closable?: boolean;
    closed?: Date;
    description?: string;
    entity?: SupportTicketEntity;
    gravatarId?: string;
    id?: number;
    opened?: Date;
    openedBy?: string;
    status?: SupportTicketStatusEnum;
    summary?: string;
    updated?: Date;
    updatedBy?: string;
}
