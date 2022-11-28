import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { RefundReason } from "./refundreason";
import { OrderLineItemProduct } from "./orderlineitemproduct";
export declare class MerchantOrderReturnItem extends SpeakeasyBase {
    customerReturnReason?: CustomerReturnReason;
    itemId?: string;
    merchantReturnReason?: RefundReason;
    product?: OrderLineItemProduct;
    returnShipmentIds?: string[];
    state?: string;
}
