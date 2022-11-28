import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
export declare enum ReturnPolicyOnlineReturnShippingFeeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Fixed = "FIXED",
    CustomerPayingActualFee = "CUSTOMER_PAYING_ACTUAL_FEE"
}
/**
 * The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.
**/
export declare class ReturnPolicyOnlineReturnShippingFee extends SpeakeasyBase {
    fixedFee?: PriceAmount;
    type?: ReturnPolicyOnlineReturnShippingFeeTypeEnum;
}
