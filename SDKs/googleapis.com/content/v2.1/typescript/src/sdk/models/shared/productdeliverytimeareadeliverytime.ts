import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryArea } from "./deliveryarea";
import { ProductDeliveryTimeAreaDeliveryTimeDeliveryTime } from "./productdeliverytimeareadeliverytimedeliverytime";



// ProductDeliveryTimeAreaDeliveryTime
/** 
 * A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.
**/
export class ProductDeliveryTimeAreaDeliveryTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryArea" })
  deliveryArea?: DeliveryArea;

  @SpeakeasyMetadata({ data: "json, name=deliveryTime" })
  deliveryTime?: ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
}
