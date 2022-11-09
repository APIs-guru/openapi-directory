import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonthlySchedule } from "./monthlyschedule";
import { TimeOfDay } from "./timeofday";
import { TimeZone } from "./timezone";
import { WeeklySchedule } from "./weeklyschedule";

export enum RecurringScheduleFrequencyEnum {
    FrequencyUnspecified = "FREQUENCY_UNSPECIFIED"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
,    Daily = "DAILY"
}


// RecurringSchedule
/** 
 * Sets the time for recurring patch deployments.
**/
export class RecurringSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=frequency" })
  frequency?: RecurringScheduleFrequencyEnum;

  @Metadata({ data: "json, name=lastExecuteTime" })
  lastExecuteTime?: string;

  @Metadata({ data: "json, name=monthly" })
  monthly?: MonthlySchedule;

  @Metadata({ data: "json, name=nextExecuteTime" })
  nextExecuteTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=timeOfDay" })
  timeOfDay?: TimeOfDay;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: TimeZone;

  @Metadata({ data: "json, name=weekly" })
  weekly?: WeeklySchedule;
}
