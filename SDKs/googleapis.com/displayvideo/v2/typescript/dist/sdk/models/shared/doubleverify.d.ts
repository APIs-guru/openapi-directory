import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleVerifyAppStarRating } from "./doubleverifyappstarrating";
import { DoubleVerifyBrandSafetyCategories } from "./doubleverifybrandsafetycategories";
import { DoubleVerifyDisplayViewability } from "./doubleverifydisplayviewability";
import { DoubleVerifyFraudInvalidTraffic } from "./doubleverifyfraudinvalidtraffic";
import { DoubleVerifyVideoViewability } from "./doubleverifyvideoviewability";
export declare enum DoubleVerifyAvoidedAgeRatingsEnum {
    AgeRatingUnspecified = "AGE_RATING_UNSPECIFIED",
    AppAgeRateUnknown = "APP_AGE_RATE_UNKNOWN",
    AppAgeRate4Plus = "APP_AGE_RATE_4_PLUS",
    AppAgeRate9Plus = "APP_AGE_RATE_9_PLUS",
    AppAgeRate12Plus = "APP_AGE_RATE_12_PLUS",
    AppAgeRate17Plus = "APP_AGE_RATE_17_PLUS",
    AppAgeRate18Plus = "APP_AGE_RATE_18_PLUS"
}
/**
 * Details of DoubleVerify settings.
**/
export declare class DoubleVerify extends SpeakeasyBase {
    appStarRating?: DoubleVerifyAppStarRating;
    avoidedAgeRatings?: DoubleVerifyAvoidedAgeRatingsEnum[];
    brandSafetyCategories?: DoubleVerifyBrandSafetyCategories;
    customSegmentId?: string;
    displayViewability?: DoubleVerifyDisplayViewability;
    fraudInvalidTraffic?: DoubleVerifyFraudInvalidTraffic;
    videoViewability?: DoubleVerifyVideoViewability;
}
