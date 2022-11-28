import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicDayOfWeekEnum } from "./dynamicdayofweekenum";
/**
 * An entity representing a user's access schedule.
**/
export declare class AccessSchedule extends SpeakeasyBase {
    dayOfWeek: DynamicDayOfWeekEnum;
    endHour: number;
    id: number;
    startHour: number;
    userId: string;
}
/**
 * An entity representing a user's access schedule.
**/
export declare class AccessScheduleInput extends SpeakeasyBase {
    dayOfWeek: DynamicDayOfWeekEnum;
    endHour: number;
    startHour: number;
}
