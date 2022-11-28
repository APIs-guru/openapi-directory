import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED",
    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL",
    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}
/**
 * A Promotion resource that defines a promotion for a subscription that can be resold.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1Promotion extends SpeakeasyBase {
    applicableProducts?: string[];
    endTime?: string;
    freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;
    name?: string;
    promotionType?: GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum;
    regionCodes?: string[];
    startTime?: string;
    titles?: GoogleTypeLocalizedText[];
}
