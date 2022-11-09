import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DoubleVerifyAppStarRating } from "./doubleverifyappstarrating";
import { DoubleVerifyBrandSafetyCategories } from "./doubleverifybrandsafetycategories";
import { DoubleVerifyDisplayViewability } from "./doubleverifydisplayviewability";
import { DoubleVerifyFraudInvalidTraffic } from "./doubleverifyfraudinvalidtraffic";
import { DoubleVerifyVideoViewability } from "./doubleverifyvideoviewability";

export enum DoubleVerifyAvoidedAgeRatingsEnum {
    AgeRatingUnspecified = "AGE_RATING_UNSPECIFIED"
,    AppAgeRateUnknown = "APP_AGE_RATE_UNKNOWN"
,    AppAgeRate4Plus = "APP_AGE_RATE_4_PLUS"
,    AppAgeRate9Plus = "APP_AGE_RATE_9_PLUS"
,    AppAgeRate12Plus = "APP_AGE_RATE_12_PLUS"
,    AppAgeRate17Plus = "APP_AGE_RATE_17_PLUS"
,    AppAgeRate18Plus = "APP_AGE_RATE_18_PLUS"
}


// DoubleVerify
/** 
 * Details of DoubleVerify settings.
**/
export class DoubleVerify extends SpeakeasyBase {
  @Metadata({ data: "json, name=appStarRating" })
  appStarRating?: DoubleVerifyAppStarRating;

  @Metadata({ data: "json, name=avoidedAgeRatings" })
  avoidedAgeRatings?: DoubleVerifyAvoidedAgeRatingsEnum[];

  @Metadata({ data: "json, name=brandSafetyCategories" })
  brandSafetyCategories?: DoubleVerifyBrandSafetyCategories;

  @Metadata({ data: "json, name=customSegmentId" })
  customSegmentId?: string;

  @Metadata({ data: "json, name=displayViewability" })
  displayViewability?: DoubleVerifyDisplayViewability;

  @Metadata({ data: "json, name=fraudInvalidTraffic" })
  fraudInvalidTraffic?: DoubleVerifyFraudInvalidTraffic;

  @Metadata({ data: "json, name=videoViewability" })
  videoViewability?: DoubleVerifyVideoViewability;
}
