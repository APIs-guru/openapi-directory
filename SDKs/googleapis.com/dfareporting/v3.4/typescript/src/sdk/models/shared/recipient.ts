import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RecipientDeliveryTypeEnum {
    Link = "LINK"
,    Attachment = "ATTACHMENT"
}


// Recipient
/** 
 * Represents a recipient.
**/
export class Recipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryType" })
  deliveryType?: RecipientDeliveryTypeEnum;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
