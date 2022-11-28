import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersReturnRefundLineItemRequest extends SpeakeasyBase {
    lineItemId?: string;
    operationId?: string;
    priceAmount?: Price;
    productId?: string;
    quantity?: number;
    reason?: string;
    reasonText?: string;
    taxAmount?: Price;
}
