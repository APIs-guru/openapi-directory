import { SpeakeasyBase } from "../../../internal/utils";
import { ProductDeliveryTimeAreaDeliveryTime } from "./productdeliverytimeareadeliverytime";
import { ProductId } from "./productid";
/**
 * The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead.
**/
export declare class ProductDeliveryTime extends SpeakeasyBase {
    areaDeliveryTimes?: ProductDeliveryTimeAreaDeliveryTime[];
    productId?: ProductId;
}
