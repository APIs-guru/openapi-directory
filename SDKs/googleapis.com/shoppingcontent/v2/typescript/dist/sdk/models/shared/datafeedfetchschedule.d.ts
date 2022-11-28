import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
**/
export declare class DatafeedFetchSchedule extends SpeakeasyBase {
    dayOfMonth?: number;
    fetchUrl?: string;
    hour?: number;
    minuteOfHour?: number;
    password?: string;
    paused?: boolean;
    timeZone?: string;
    username?: string;
    weekday?: string;
}
