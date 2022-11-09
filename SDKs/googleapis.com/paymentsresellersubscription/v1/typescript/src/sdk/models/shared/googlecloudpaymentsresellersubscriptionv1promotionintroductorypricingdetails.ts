import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec";


// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails
/** 
 * The details of a introductory pricing promotion.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=introductoryPricingSpecs", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec })
  introductoryPricingSpecs?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec[];
}
