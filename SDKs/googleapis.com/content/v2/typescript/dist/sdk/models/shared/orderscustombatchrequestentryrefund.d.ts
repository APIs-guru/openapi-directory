import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersCustomBatchRequestEntryRefund extends SpeakeasyBase {
    amount?: Price;
    amountPretax?: Price;
    amountTax?: Price;
    reason?: string;
    reasonText?: string;
}
