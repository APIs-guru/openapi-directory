import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
export declare class ReturnPricingInfo extends SpeakeasyBase {
    chargeReturnShippingFee?: boolean;
    maxReturnShippingFee?: MonetaryAmount;
    refundableItemsTotalAmount?: MonetaryAmount;
    refundableShippingAmount?: MonetaryAmount;
    totalRefundedAmount?: MonetaryAmount;
}
