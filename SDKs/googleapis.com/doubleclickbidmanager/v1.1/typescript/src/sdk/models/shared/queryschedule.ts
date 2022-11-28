import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueryScheduleFrequencyEnum {
    OneTime = "ONE_TIME",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    SemiMonthly = "SEMI_MONTHLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}


// QuerySchedule
/** 
 * Information on how frequently and when to run a query.
**/
export class QuerySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeMs" })
  endTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: QueryScheduleFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=nextRunMinuteOfDay" })
  nextRunMinuteOfDay?: number;

  @SpeakeasyMetadata({ data: "json, name=nextRunTimezoneCode" })
  nextRunTimezoneCode?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimeMs" })
  startTimeMs?: string;
}
