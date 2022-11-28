import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec";



// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails
/** 
 * The details of a introductory pricing promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=introductoryPricingSpecs", elemType: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec })
  introductoryPricingSpecs?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec[];
}


// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput
/** 
 * The details of a introductory pricing promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=introductoryPricingSpecs", elemType: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput })
  introductoryPricingSpecs?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[];
}
