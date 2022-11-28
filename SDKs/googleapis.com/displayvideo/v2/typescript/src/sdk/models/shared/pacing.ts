import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PacingPacingPeriodEnum {
    PacingPeriodUnspecified = "PACING_PERIOD_UNSPECIFIED",
    PacingPeriodDaily = "PACING_PERIOD_DAILY",
    PacingPeriodFlight = "PACING_PERIOD_FLIGHT"
}

export enum PacingPacingTypeEnum {
    PacingTypeUnspecified = "PACING_TYPE_UNSPECIFIED",
    PacingTypeAhead = "PACING_TYPE_AHEAD",
    PacingTypeAsap = "PACING_TYPE_ASAP",
    PacingTypeEven = "PACING_TYPE_EVEN"
}


// Pacing
/** 
 * Settings that control the rate at which a budget is spent.
**/
export class Pacing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailyMaxImpressions" })
  dailyMaxImpressions?: string;

  @SpeakeasyMetadata({ data: "json, name=dailyMaxMicros" })
  dailyMaxMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=pacingPeriod" })
  pacingPeriod?: PacingPacingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=pacingType" })
  pacingType?: PacingPacingTypeEnum;
}
