import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatafeedFetchSchedule
/** 
 * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
**/
export class DatafeedFetchSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: number;

  @Metadata({ data: "json, name=fetchUrl" })
  fetchUrl?: string;

  @Metadata({ data: "json, name=hour" })
  hour?: number;

  @Metadata({ data: "json, name=minuteOfHour" })
  minuteOfHour?: number;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=paused" })
  paused?: boolean;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=weekday" })
  weekday?: string;
}
