import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductDeliveryTimeAreaDeliveryTime } from "./productdeliverytimeareadeliverytime";
import { ProductId } from "./productid";


// ProductDeliveryTime
/** 
 * The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead.
**/
export class ProductDeliveryTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=areaDeliveryTimes", elemType: shared.ProductDeliveryTimeAreaDeliveryTime })
  areaDeliveryTimes?: ProductDeliveryTimeAreaDeliveryTime[];

  @Metadata({ data: "json, name=productId" })
  productId?: ProductId;
}
