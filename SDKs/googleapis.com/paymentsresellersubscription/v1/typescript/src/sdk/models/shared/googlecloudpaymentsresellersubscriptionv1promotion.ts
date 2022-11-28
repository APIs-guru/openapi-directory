import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";


export enum GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED",
    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL",
    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}


// GoogleCloudPaymentsResellerSubscriptionV1Promotion
/** 
 * A Promotion resource that defines a promotion for a subscription that can be resold.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Promotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicableProducts" })
  applicableProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=freeTrialDuration" })
  freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @SpeakeasyMetadata({ data: "json, name=introductoryPricingDetails" })
  introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionType" })
  promotionType?: GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=regionCodes" })
  regionCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=titles", elemType: GoogleTypeLocalizedText })
  titles?: GoogleTypeLocalizedText[];
}
