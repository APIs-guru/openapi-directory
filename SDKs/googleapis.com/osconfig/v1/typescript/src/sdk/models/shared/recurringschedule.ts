import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonthlySchedule } from "./monthlyschedule";
import { TimeOfDay } from "./timeofday";
import { TimeZone } from "./timezone";
import { WeeklySchedule } from "./weeklyschedule";


export enum RecurringScheduleFrequencyEnum {
    FrequencyUnspecified = "FREQUENCY_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Daily = "DAILY"
}


// RecurringSchedule
/** 
 * Sets the time for recurring patch deployments.
**/
export class RecurringSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: RecurringScheduleFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=lastExecuteTime" })
  lastExecuteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: MonthlySchedule;

  @SpeakeasyMetadata({ data: "json, name=nextExecuteTime" })
  nextExecuteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=timeOfDay" })
  timeOfDay?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: TimeZone;

  @SpeakeasyMetadata({ data: "json, name=weekly" })
  weekly?: WeeklySchedule;
}


// RecurringScheduleInput
/** 
 * Sets the time for recurring patch deployments.
**/
export class RecurringScheduleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: RecurringScheduleFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: MonthlySchedule;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=timeOfDay" })
  timeOfDay?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: TimeZone;

  @SpeakeasyMetadata({ data: "json, name=weekly" })
  weekly?: WeeklySchedule;
}
