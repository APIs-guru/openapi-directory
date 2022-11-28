import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportTicketReply
/** 
 * An object representing a reply to a Support Ticket.
 * 
**/
export class SupportTicketReply extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=from_linode" })
  fromLinode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
