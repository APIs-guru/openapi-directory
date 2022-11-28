import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
/**
 * A schedule for data to refresh every day in a given time interval.
**/
export declare class DataSourceRefreshDailySchedule extends SpeakeasyBase {
    startTime?: TimeOfDay;
}
