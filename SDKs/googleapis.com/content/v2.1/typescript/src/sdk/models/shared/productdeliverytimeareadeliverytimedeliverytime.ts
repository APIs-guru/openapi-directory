import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductDeliveryTimeAreaDeliveryTimeDeliveryTime
/** 
 * A delivery time for this product.
**/
export class ProductDeliveryTimeAreaDeliveryTimeDeliveryTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxHandlingTimeDays" })
  maxHandlingTimeDays?: number;

  @SpeakeasyMetadata({ data: "json, name=maxTransitTimeDays" })
  maxTransitTimeDays?: number;

  @SpeakeasyMetadata({ data: "json, name=minHandlingTimeDays" })
  minHandlingTimeDays?: number;

  @SpeakeasyMetadata({ data: "json, name=minTransitTimeDays" })
  minTransitTimeDays?: number;
}
