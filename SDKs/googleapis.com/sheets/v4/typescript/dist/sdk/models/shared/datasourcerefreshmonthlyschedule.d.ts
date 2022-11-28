import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
/**
 * A monthly schedule for data to refresh on specific days in the month in a given time interval.
**/
export declare class DataSourceRefreshMonthlySchedule extends SpeakeasyBase {
    daysOfMonth?: number[];
    startTime?: TimeOfDay;
}
