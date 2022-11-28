import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersCustomBatchRequestEntryCancelLineItem extends SpeakeasyBase {
    amount?: Price;
    amountPretax?: Price;
    amountTax?: Price;
    lineItemId?: string;
    productId?: string;
    quantity?: number;
    reason?: string;
    reasonText?: string;
}
