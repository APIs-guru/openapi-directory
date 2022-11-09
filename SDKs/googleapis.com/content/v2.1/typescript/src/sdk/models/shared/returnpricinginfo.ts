import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonetaryAmount } from "./monetaryamount";
import { MonetaryAmount } from "./monetaryamount";
import { MonetaryAmount } from "./monetaryamount";
import { MonetaryAmount } from "./monetaryamount";


export class ReturnPricingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargeReturnShippingFee" })
  chargeReturnShippingFee?: boolean;

  @Metadata({ data: "json, name=maxReturnShippingFee" })
  maxReturnShippingFee?: MonetaryAmount;

  @Metadata({ data: "json, name=refundableItemsTotalAmount" })
  refundableItemsTotalAmount?: MonetaryAmount;

  @Metadata({ data: "json, name=refundableShippingAmount" })
  refundableShippingAmount?: MonetaryAmount;

  @Metadata({ data: "json, name=totalRefundedAmount" })
  totalRefundedAmount?: MonetaryAmount;
}
