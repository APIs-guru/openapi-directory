import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DoubleVerifyDisplayViewabilityIabEnum {
    IabViewedRateUnspecified = "IAB_VIEWED_RATE_UNSPECIFIED",
    IabViewedRate80PercentHigher = "IAB_VIEWED_RATE_80_PERCENT_HIGHER",
    IabViewedRate75PercentHigher = "IAB_VIEWED_RATE_75_PERCENT_HIGHER",
    IabViewedRate70PercentHigher = "IAB_VIEWED_RATE_70_PERCENT_HIGHER",
    IabViewedRate65PercentHigher = "IAB_VIEWED_RATE_65_PERCENT_HIGHER",
    IabViewedRate60PercentHigher = "IAB_VIEWED_RATE_60_PERCENT_HIGHER",
    IabViewedRate55PercentHigher = "IAB_VIEWED_RATE_55_PERCENT_HIGHER",
    IabViewedRate50PercentHigher = "IAB_VIEWED_RATE_50_PERCENT_HIGHER",
    IabViewedRate40PercentHigher = "IAB_VIEWED_RATE_40_PERCENT_HIGHER",
    IabViewedRate30PercentHigher = "IAB_VIEWED_RATE_30_PERCENT_HIGHER"
}

export enum DoubleVerifyDisplayViewabilityViewableDuringEnum {
    AverageViewDurationUnspecified = "AVERAGE_VIEW_DURATION_UNSPECIFIED",
    AverageViewDuration5Sec = "AVERAGE_VIEW_DURATION_5_SEC",
    AverageViewDuration10Sec = "AVERAGE_VIEW_DURATION_10_SEC",
    AverageViewDuration15Sec = "AVERAGE_VIEW_DURATION_15_SEC"
}


// DoubleVerifyDisplayViewability
/** 
 * Details of DoubleVerify display viewability settings.
**/
export class DoubleVerifyDisplayViewability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iab" })
  iab?: DoubleVerifyDisplayViewabilityIabEnum;

  @SpeakeasyMetadata({ data: "json, name=viewableDuring" })
  viewableDuring?: DoubleVerifyDisplayViewabilityViewableDuringEnum;
}
