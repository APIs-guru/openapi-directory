import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";



// DataSourceRefreshMonthlySchedule
/** 
 * A monthly schedule for data to refresh on specific days in the month in a given time interval.
**/
export class DataSourceRefreshMonthlySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=daysOfMonth" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
