import { SpeakeasyBase } from "../../../internal/utils";
import { MonthlySchedule } from "./monthlyschedule";
import { TimeOfDay } from "./timeofday";
import { TimeZone } from "./timezone";
import { WeeklySchedule } from "./weeklyschedule";
export declare enum RecurringScheduleFrequencyEnum {
    FrequencyUnspecified = "FREQUENCY_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Daily = "DAILY"
}
/**
 * Sets the time for recurring patch deployments.
**/
export declare class RecurringSchedule extends SpeakeasyBase {
    endTime?: string;
    frequency?: RecurringScheduleFrequencyEnum;
    lastExecuteTime?: string;
    monthly?: MonthlySchedule;
    nextExecuteTime?: string;
    startTime?: string;
    timeOfDay?: TimeOfDay;
    timeZone?: TimeZone;
    weekly?: WeeklySchedule;
}
/**
 * Sets the time for recurring patch deployments.
**/
export declare class RecurringScheduleInput extends SpeakeasyBase {
    endTime?: string;
    frequency?: RecurringScheduleFrequencyEnum;
    monthly?: MonthlySchedule;
    startTime?: string;
    timeOfDay?: TimeOfDay;
    timeZone?: TimeZone;
    weekly?: WeeklySchedule;
}
