import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueryScheduleFrequencyEnum {
    OneTime = "ONE_TIME"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    SemiMonthly = "SEMI_MONTHLY"
,    Monthly = "MONTHLY"
,    Quarterly = "QUARTERLY"
,    Yearly = "YEARLY"
}


// QuerySchedule
/** 
 * Information on how frequently and when to run a query.
**/
export class QuerySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeMs" })
  endTimeMs?: string;

  @Metadata({ data: "json, name=frequency" })
  frequency?: QueryScheduleFrequencyEnum;

  @Metadata({ data: "json, name=nextRunMinuteOfDay" })
  nextRunMinuteOfDay?: number;

  @Metadata({ data: "json, name=nextRunTimezoneCode" })
  nextRunTimezoneCode?: string;

  @Metadata({ data: "json, name=startTimeMs" })
  startTimeMs?: string;
}
