import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportTicketEntity
/** 
 * The entity this Ticket was opened for.
 * 
**/
export class SupportTicketEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum SupportTicketStatusEnum {
    Closed = "closed",
    New = "new",
    Open = "open"
}


// SupportTicket
/** 
 * A Support Ticket opened on your Account.
 * 
**/
export class SupportTicket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments" })
  attachments?: string[];

  @SpeakeasyMetadata({ data: "json, name=closable" })
  closable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: SupportTicketEntity;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=opened" })
  opened?: Date;

  @SpeakeasyMetadata({ data: "json, name=opened_by" })
  openedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SupportTicketStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
