import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";

export enum QueryScheduleFrequencyEnum {
    FrequencyUnspecified = "FREQUENCY_UNSPECIFIED"
,    OneTime = "ONE_TIME"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    SemiMonthly = "SEMI_MONTHLY"
,    Monthly = "MONTHLY"
,    Quarterly = "QUARTERLY"
,    Yearly = "YEARLY"
}


// QuerySchedule
/** 
 * Information on when and how frequently to run a query.
**/
export class QuerySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=frequency" })
  frequency?: QueryScheduleFrequencyEnum;

  @Metadata({ data: "json, name=nextRunTimezoneCode" })
  nextRunTimezoneCode?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
