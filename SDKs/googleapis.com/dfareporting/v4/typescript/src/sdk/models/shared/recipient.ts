import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecipientDeliveryTypeEnum {
    Link = "LINK",
    Attachment = "ATTACHMENT"
}


// Recipient
/** 
 * Represents a recipient.
**/
export class Recipient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryType" })
  deliveryType?: RecipientDeliveryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
