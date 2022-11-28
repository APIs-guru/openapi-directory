import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";



// DataSourceRefreshDailySchedule
/** 
 * A schedule for data to refresh every day in a given time interval.
**/
export class DataSourceRefreshDailySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
