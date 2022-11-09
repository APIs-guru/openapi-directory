import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SupportTicketReply
/** 
 * An object representing a reply to a Support Ticket.
 * 
**/
export class SupportTicketReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=from_linode" })
  fromLinode?: boolean;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
