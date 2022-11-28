import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";


export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED",
    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL",
    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec
/** 
 * Describes the spec for one promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeTrialDuration" })
  freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @SpeakeasyMetadata({ data: "json, name=introductoryPricingDetails" })
  introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;

  @SpeakeasyMetadata({ data: "json, name=promotion" })
  promotion?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum;
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput
/** 
 * Describes the spec for one promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeTrialDuration" })
  freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @SpeakeasyMetadata({ data: "json, name=introductoryPricingDetails" })
  introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput;

  @SpeakeasyMetadata({ data: "json, name=promotion" })
  promotion?: string;
}
