import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SupportTicketEntity
/** 
 * The entity this Ticket was opened for.
 * 
**/
export class SupportTicketEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum SupportTicketStatusEnum {
    Closed = "closed"
,    New = "new"
,    Open = "open"
}


// SupportTicket
/** 
 * A Support Ticket opened on your Account.
 * 
**/
export class SupportTicket extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments" })
  attachments?: string[];

  @Metadata({ data: "json, name=closable" })
  closable?: boolean;

  @Metadata({ data: "json, name=closed" })
  closed?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=entity" })
  entity?: SupportTicketEntity;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=opened" })
  opened?: Date;

  @Metadata({ data: "json, name=opened_by" })
  openedBy?: string;

  @Metadata({ data: "json, name=status" })
  status?: SupportTicketStatusEnum;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
