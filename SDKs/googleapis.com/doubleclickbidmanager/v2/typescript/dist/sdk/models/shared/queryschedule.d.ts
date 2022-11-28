import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum QueryScheduleFrequencyEnum {
    FrequencyUnspecified = "FREQUENCY_UNSPECIFIED",
    OneTime = "ONE_TIME",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    SemiMonthly = "SEMI_MONTHLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}
/**
 * Information on when and how frequently to run a query.
**/
export declare class QuerySchedule extends SpeakeasyBase {
    endDate?: Date;
    frequency?: QueryScheduleFrequencyEnum;
    nextRunTimezoneCode?: string;
    startDate?: Date;
}
