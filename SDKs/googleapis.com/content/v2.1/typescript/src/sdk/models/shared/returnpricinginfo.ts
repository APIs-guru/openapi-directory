import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";



export class ReturnPricingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeReturnShippingFee" })
  chargeReturnShippingFee?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxReturnShippingFee" })
  maxReturnShippingFee?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=refundableItemsTotalAmount" })
  refundableItemsTotalAmount?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=refundableShippingAmount" })
  refundableShippingAmount?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=totalRefundedAmount" })
  totalRefundedAmount?: MonetaryAmount;
}
