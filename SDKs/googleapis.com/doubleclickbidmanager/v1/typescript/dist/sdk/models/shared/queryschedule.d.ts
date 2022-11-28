import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueryScheduleFrequencyEnum {
    OneTime = "ONE_TIME",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    SemiMonthly = "SEMI_MONTHLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}
/**
 * Information on how frequently and when to run a query.
**/
export declare class QuerySchedule extends SpeakeasyBase {
    endTimeMs?: string;
    frequency?: QueryScheduleFrequencyEnum;
    nextRunMinuteOfDay?: number;
    nextRunTimezoneCode?: string;
    startTimeMs?: string;
}
