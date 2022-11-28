import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecipientDeliveryTypeEnum {
    Link = "LINK",
    Attachment = "ATTACHMENT"
}
/**
 * Represents a recipient.
**/
export declare class Recipient extends SpeakeasyBase {
    deliveryType?: RecipientDeliveryTypeEnum;
    email?: string;
    kind?: string;
}
