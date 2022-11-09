import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeOfDay } from "./timeofday";


// DataSourceRefreshMonthlySchedule
/** 
 * A monthly schedule for data to refresh on specific days in the month in a given time interval.
**/
export class DataSourceRefreshMonthlySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=daysOfMonth" })
  daysOfMonth?: number[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
