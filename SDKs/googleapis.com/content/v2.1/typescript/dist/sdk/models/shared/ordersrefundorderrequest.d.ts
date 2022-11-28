import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
export declare class OrdersRefundOrderRequest extends SpeakeasyBase {
    amount?: MonetaryAmount;
    fullRefund?: boolean;
    operationId?: string;
    reason?: string;
    reasonText?: string;
}
