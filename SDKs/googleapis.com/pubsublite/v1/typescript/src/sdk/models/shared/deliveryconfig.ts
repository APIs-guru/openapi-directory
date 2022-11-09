import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeliveryConfigDeliveryRequirementEnum {
    DeliveryRequirementUnspecified = "DELIVERY_REQUIREMENT_UNSPECIFIED"
,    DeliverImmediately = "DELIVER_IMMEDIATELY"
,    DeliverAfterStored = "DELIVER_AFTER_STORED"
}


// DeliveryConfig
/** 
 * The settings for a subscription's message delivery.
**/
export class DeliveryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryRequirement" })
  deliveryRequirement?: DeliveryConfigDeliveryRequirementEnum;
}
