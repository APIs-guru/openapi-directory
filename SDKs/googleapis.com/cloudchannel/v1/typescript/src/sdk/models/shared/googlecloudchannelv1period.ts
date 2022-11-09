import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudChannelV1PeriodPeriodTypeEnum {
    PeriodTypeUnspecified = "PERIOD_TYPE_UNSPECIFIED"
,    Day = "DAY"
,    Month = "MONTH"
,    Year = "YEAR"
}


// GoogleCloudChannelV1Period
/** 
 * Represents period in days/months/years.
**/
export class GoogleCloudChannelV1Period extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=periodType" })
  periodType?: GoogleCloudChannelV1PeriodPeriodTypeEnum;
}
