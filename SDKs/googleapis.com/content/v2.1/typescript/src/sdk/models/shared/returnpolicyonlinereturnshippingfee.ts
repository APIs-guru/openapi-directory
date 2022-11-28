import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";


export enum ReturnPolicyOnlineReturnShippingFeeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Fixed = "FIXED",
    CustomerPayingActualFee = "CUSTOMER_PAYING_ACTUAL_FEE"
}


// ReturnPolicyOnlineReturnShippingFee
/** 
 * The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.
**/
export class ReturnPolicyOnlineReturnShippingFee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedFee" })
  fixedFee?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReturnPolicyOnlineReturnShippingFeeTypeEnum;
}
