import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeliveryConfigDeliveryRequirementEnum {
    DeliveryRequirementUnspecified = "DELIVERY_REQUIREMENT_UNSPECIFIED",
    DeliverImmediately = "DELIVER_IMMEDIATELY",
    DeliverAfterStored = "DELIVER_AFTER_STORED"
}
/**
 * The settings for a subscription's message delivery.
**/
export declare class DeliveryConfig extends SpeakeasyBase {
    deliveryRequirement?: DeliveryConfigDeliveryRequirementEnum;
}
