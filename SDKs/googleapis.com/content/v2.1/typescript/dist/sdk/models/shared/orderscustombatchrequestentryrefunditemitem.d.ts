import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
export declare class OrdersCustomBatchRequestEntryRefundItemItem extends SpeakeasyBase {
    amount?: MonetaryAmount;
    fullRefund?: boolean;
    lineItemId?: string;
    productId?: string;
    quantity?: number;
}
