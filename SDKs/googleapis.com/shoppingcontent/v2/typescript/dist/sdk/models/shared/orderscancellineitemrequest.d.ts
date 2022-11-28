import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersCancelLineItemRequest extends SpeakeasyBase {
    amount?: Price;
    amountPretax?: Price;
    amountTax?: Price;
    lineItemId?: string;
    operationId?: string;
    productId?: string;
    quantity?: number;
    reason?: string;
    reasonText?: string;
}
