import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceLevelIndicator } from "./servicelevelindicator";

export enum ServiceLevelObjectiveCalendarPeriodEnum {
    CalendarPeriodUnspecified = "CALENDAR_PERIOD_UNSPECIFIED"
,    Day = "DAY"
,    Week = "WEEK"
,    Fortnight = "FORTNIGHT"
,    Month = "MONTH"
,    Quarter = "QUARTER"
,    Half = "HALF"
,    Year = "YEAR"
}


// ServiceLevelObjective
/** 
 * A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully."
**/
export class ServiceLevelObjective extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendarPeriod" })
  calendarPeriod?: ServiceLevelObjectiveCalendarPeriodEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=goal" })
  goal?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rollingPeriod" })
  rollingPeriod?: string;

  @Metadata({ data: "json, name=serviceLevelIndicator" })
  serviceLevelIndicator?: ServiceLevelIndicator;

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
