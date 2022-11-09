import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductDeliveryTimeAreaDeliveryTimeDeliveryTime
/** 
 * A delivery time for this product.
**/
export class ProductDeliveryTimeAreaDeliveryTimeDeliveryTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxHandlingTimeDays" })
  maxHandlingTimeDays?: number;

  @Metadata({ data: "json, name=maxTransitTimeDays" })
  maxTransitTimeDays?: number;

  @Metadata({ data: "json, name=minHandlingTimeDays" })
  minHandlingTimeDays?: number;

  @Metadata({ data: "json, name=minTransitTimeDays" })
  minTransitTimeDays?: number;
}
