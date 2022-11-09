import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DoubleVerifyAppStarRatingAvoidedStarRatingEnum {
    AppStarRateUnspecified = "APP_STAR_RATE_UNSPECIFIED"
,    AppStarRate1Point5Less = "APP_STAR_RATE_1_POINT_5_LESS"
,    AppStarRate2Less = "APP_STAR_RATE_2_LESS"
,    AppStarRate2Point5Less = "APP_STAR_RATE_2_POINT_5_LESS"
,    AppStarRate3Less = "APP_STAR_RATE_3_LESS"
,    AppStarRate3Point5Less = "APP_STAR_RATE_3_POINT_5_LESS"
,    AppStarRate4Less = "APP_STAR_RATE_4_LESS"
,    AppStarRate4Point5Less = "APP_STAR_RATE_4_POINT_5_LESS"
}


// DoubleVerifyAppStarRating
/** 
 * Details of DoubleVerify star ratings settings.
**/
export class DoubleVerifyAppStarRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=avoidInsufficientStarRating" })
  avoidInsufficientStarRating?: boolean;

  @Metadata({ data: "json, name=avoidedStarRating" })
  avoidedStarRating?: DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
}
