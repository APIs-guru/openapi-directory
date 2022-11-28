import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudChannelV1PeriodPeriodTypeEnum {
    PeriodTypeUnspecified = "PERIOD_TYPE_UNSPECIFIED",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}


// GoogleCloudChannelV1Period
/** 
 * Represents period in days/months/years.
**/
export class GoogleCloudChannelV1Period extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=periodType" })
  periodType?: GoogleCloudChannelV1PeriodPeriodTypeEnum;
}
