import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryArea } from "./deliveryarea";
import { ProductDeliveryTimeAreaDeliveryTimeDeliveryTime } from "./productdeliverytimeareadeliverytimedeliverytime";
/**
 * A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.
**/
export declare class ProductDeliveryTimeAreaDeliveryTime extends SpeakeasyBase {
    deliveryArea?: DeliveryArea;
    deliveryTime?: ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
}
