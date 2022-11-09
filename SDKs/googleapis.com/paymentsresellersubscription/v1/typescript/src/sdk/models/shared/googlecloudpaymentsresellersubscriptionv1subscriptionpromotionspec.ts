import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";

export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED"
,    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL"
,    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec
/** 
 * Describes the spec for one promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=freeTrialDuration" })
  freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @Metadata({ data: "json, name=introductoryPricingDetails" })
  introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;

  @Metadata({ data: "json, name=promotion" })
  promotion?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum;
}
