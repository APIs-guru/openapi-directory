import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";

export enum GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED"
,    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL"
,    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}


// GoogleCloudPaymentsResellerSubscriptionV1Promotion
/** 
 * A Promotion resource that defines a promotion for a subscription that can be resold.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Promotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicableProducts" })
  applicableProducts?: string[];

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=freeTrialDuration" })
  freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @Metadata({ data: "json, name=introductoryPricingDetails" })
  introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=promotionType" })
  promotionType?: GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum;

  @Metadata({ data: "json, name=regionCodes" })
  regionCodes?: string[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=titles", elemType: shared.GoogleTypeLocalizedText })
  titles?: GoogleTypeLocalizedText[];
}
