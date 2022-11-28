import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleVerifyAppStarRating } from "./doubleverifyappstarrating";
import { DoubleVerifyBrandSafetyCategories } from "./doubleverifybrandsafetycategories";
import { DoubleVerifyDisplayViewability } from "./doubleverifydisplayviewability";
import { DoubleVerifyFraudInvalidTraffic } from "./doubleverifyfraudinvalidtraffic";
import { DoubleVerifyVideoViewability } from "./doubleverifyvideoviewability";


export enum DoubleVerifyAvoidedAgeRatingsEnum {
    AgeRatingUnspecified = "AGE_RATING_UNSPECIFIED",
    AppAgeRateUnknown = "APP_AGE_RATE_UNKNOWN",
    AppAgeRate4Plus = "APP_AGE_RATE_4_PLUS",
    AppAgeRate9Plus = "APP_AGE_RATE_9_PLUS",
    AppAgeRate12Plus = "APP_AGE_RATE_12_PLUS",
    AppAgeRate17Plus = "APP_AGE_RATE_17_PLUS",
    AppAgeRate18Plus = "APP_AGE_RATE_18_PLUS"
}


// DoubleVerify
/** 
 * Details of DoubleVerify settings.
**/
export class DoubleVerify extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appStarRating" })
  appStarRating?: DoubleVerifyAppStarRating;

  @SpeakeasyMetadata({ data: "json, name=avoidedAgeRatings" })
  avoidedAgeRatings?: DoubleVerifyAvoidedAgeRatingsEnum[];

  @SpeakeasyMetadata({ data: "json, name=brandSafetyCategories" })
  brandSafetyCategories?: DoubleVerifyBrandSafetyCategories;

  @SpeakeasyMetadata({ data: "json, name=customSegmentId" })
  customSegmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayViewability" })
  displayViewability?: DoubleVerifyDisplayViewability;

  @SpeakeasyMetadata({ data: "json, name=fraudInvalidTraffic" })
  fraudInvalidTraffic?: DoubleVerifyFraudInvalidTraffic;

  @SpeakeasyMetadata({ data: "json, name=videoViewability" })
  videoViewability?: DoubleVerifyVideoViewability;
}
