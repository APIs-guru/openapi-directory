import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";


// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec
/** 
 * The duration of an introductory pricing promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=discountAmount" })
  discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;

  @Metadata({ data: "json, name=discountRatioMicros" })
  discountRatioMicros?: string;

  @Metadata({ data: "json, name=recurrenceCount" })
  recurrenceCount?: number;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
