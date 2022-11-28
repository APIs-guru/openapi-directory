import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatafeedFetchSchedule
/** 
 * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
**/
export class DatafeedFetchSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=fetchUrl" })
  fetchUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: number;

  @SpeakeasyMetadata({ data: "json, name=minuteOfHour" })
  minuteOfHour?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=paused" })
  paused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=weekday" })
  weekday?: string;
}
