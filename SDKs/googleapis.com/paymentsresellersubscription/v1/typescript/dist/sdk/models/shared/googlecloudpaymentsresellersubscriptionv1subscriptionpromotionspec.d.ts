import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED",
    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL",
    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}
/**
 * Describes the spec for one promotion.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec extends SpeakeasyBase {
    freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;
    promotion?: string;
    type?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum;
}
/**
 * Describes the spec for one promotion.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput extends SpeakeasyBase {
    freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput;
    promotion?: string;
}
