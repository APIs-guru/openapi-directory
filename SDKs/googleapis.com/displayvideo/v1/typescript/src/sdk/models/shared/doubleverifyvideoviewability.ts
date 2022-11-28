import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DoubleVerifyVideoViewabilityPlayerImpressionRateEnum {
    PlayerSize400X300Unspecified = "PLAYER_SIZE_400X300_UNSPECIFIED",
    PlayerSize400X30095 = "PLAYER_SIZE_400X300_95",
    PlayerSize400X30070 = "PLAYER_SIZE_400X300_70",
    PlayerSize400X30025 = "PLAYER_SIZE_400X300_25",
    PlayerSize400X3005 = "PLAYER_SIZE_400X300_5"
}

export enum DoubleVerifyVideoViewabilityVideoIabEnum {
    VideoIabUnspecified = "VIDEO_IAB_UNSPECIFIED",
    IabViewability80PercentHigher = "IAB_VIEWABILITY_80_PERCENT_HIGHER",
    IabViewability75PercentHigher = "IAB_VIEWABILITY_75_PERCENT_HIGHER",
    IabViewability70PercentHigher = "IAB_VIEWABILITY_70_PERCENT_HIGHER",
    IabViewability65PercentHihger = "IAB_VIEWABILITY_65_PERCENT_HIHGER",
    IabViewability60PercentHigher = "IAB_VIEWABILITY_60_PERCENT_HIGHER",
    IabViewability55PercentHihger = "IAB_VIEWABILITY_55_PERCENT_HIHGER",
    IabViewability50PercentHigher = "IAB_VIEWABILITY_50_PERCENT_HIGHER",
    IabViewability40PercentHihger = "IAB_VIEWABILITY_40_PERCENT_HIHGER",
    IabViewability30PercentHihger = "IAB_VIEWABILITY_30_PERCENT_HIHGER"
}

export enum DoubleVerifyVideoViewabilityVideoViewableRateEnum {
    VideoViewableRateUnspecified = "VIDEO_VIEWABLE_RATE_UNSPECIFIED",
    ViewedPerformance40PercentHigher = "VIEWED_PERFORMANCE_40_PERCENT_HIGHER",
    ViewedPerformance35PercentHigher = "VIEWED_PERFORMANCE_35_PERCENT_HIGHER",
    ViewedPerformance30PercentHigher = "VIEWED_PERFORMANCE_30_PERCENT_HIGHER",
    ViewedPerformance25PercentHigher = "VIEWED_PERFORMANCE_25_PERCENT_HIGHER",
    ViewedPerformance20PercentHigher = "VIEWED_PERFORMANCE_20_PERCENT_HIGHER",
    ViewedPerformance10PercentHigher = "VIEWED_PERFORMANCE_10_PERCENT_HIGHER"
}


// DoubleVerifyVideoViewability
/** 
 * Details of DoubleVerify video viewability settings.
**/
export class DoubleVerifyVideoViewability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playerImpressionRate" })
  playerImpressionRate?: DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;

  @SpeakeasyMetadata({ data: "json, name=videoIab" })
  videoIab?: DoubleVerifyVideoViewabilityVideoIabEnum;

  @SpeakeasyMetadata({ data: "json, name=videoViewableRate" })
  videoViewableRate?: DoubleVerifyVideoViewabilityVideoViewableRateEnum;
}
