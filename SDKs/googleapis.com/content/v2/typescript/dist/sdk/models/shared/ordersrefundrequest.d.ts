import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersRefundRequest extends SpeakeasyBase {
    amount?: Price;
    amountPretax?: Price;
    amountTax?: Price;
    operationId?: string;
    reason?: string;
    reasonText?: string;
}
