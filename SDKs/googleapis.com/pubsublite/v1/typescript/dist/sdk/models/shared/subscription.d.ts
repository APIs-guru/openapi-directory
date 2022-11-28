import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryConfig } from "./deliveryconfig";
/**
 * Metadata about a subscription resource.
**/
export declare class Subscription extends SpeakeasyBase {
    deliveryConfig?: DeliveryConfig;
    name?: string;
    topic?: string;
}
