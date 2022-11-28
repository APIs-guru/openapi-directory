import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";



// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput
/** 
 * The duration of an introductory pricing promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
}


// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec
/** 
 * The duration of an introductory pricing promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;

  @SpeakeasyMetadata({ data: "json, name=discountRatioMicros" })
  discountRatioMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrenceCount" })
  recurrenceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
