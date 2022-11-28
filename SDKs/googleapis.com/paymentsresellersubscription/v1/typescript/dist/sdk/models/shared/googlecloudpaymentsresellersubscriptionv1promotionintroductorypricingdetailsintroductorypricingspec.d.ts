import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";
/**
 * The duration of an introductory pricing promotion.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput extends SpeakeasyBase {
    discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
}
/**
 * The duration of an introductory pricing promotion.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec extends SpeakeasyBase {
    discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
    discountRatioMicros?: string;
    recurrenceCount?: number;
    regionCode?: string;
}
