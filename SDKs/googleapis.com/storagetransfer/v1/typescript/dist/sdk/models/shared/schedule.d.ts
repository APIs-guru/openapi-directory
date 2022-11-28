import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { Date } from "./date";
/**
 * Transfers can be scheduled to recur or to run just once.
**/
export declare class Schedule extends SpeakeasyBase {
    endTimeOfDay?: TimeOfDay;
    repeatInterval?: string;
    scheduleEndDate?: Date;
    scheduleStartDate?: Date;
    startTimeOfDay?: TimeOfDay;
}
