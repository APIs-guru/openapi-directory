import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersReturnRefundLineItemRequest extends SpeakeasyBase {
    amountPretax?: Price;
    amountTax?: Price;
    lineItemId?: string;
    operationId?: string;
    productId?: string;
    quantity?: number;
    reason?: string;
    reasonText?: string;
}
