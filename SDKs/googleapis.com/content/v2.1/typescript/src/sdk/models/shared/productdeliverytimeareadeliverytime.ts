import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryArea } from "./deliveryarea";
import { ProductDeliveryTimeAreaDeliveryTimeDeliveryTime } from "./productdeliverytimeareadeliverytimedeliverytime";


// ProductDeliveryTimeAreaDeliveryTime
/** 
 * A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.
**/
export class ProductDeliveryTimeAreaDeliveryTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryArea" })
  deliveryArea?: DeliveryArea;

  @Metadata({ data: "json, name=deliveryTime" })
  deliveryTime?: ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
}
