import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceLevelIndicator } from "./servicelevelindicator";
export declare enum ServiceLevelObjectiveCalendarPeriodEnum {
    CalendarPeriodUnspecified = "CALENDAR_PERIOD_UNSPECIFIED",
    Day = "DAY",
    Week = "WEEK",
    Fortnight = "FORTNIGHT",
    Month = "MONTH",
    Quarter = "QUARTER",
    Half = "HALF",
    Year = "YEAR"
}
/**
 * A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully."
**/
export declare class ServiceLevelObjective extends SpeakeasyBase {
    calendarPeriod?: ServiceLevelObjectiveCalendarPeriodEnum;
    displayName?: string;
    goal?: number;
    name?: string;
    rollingPeriod?: string;
    serviceLevelIndicator?: ServiceLevelIndicator;
    userLabels?: Map<string, string>;
}
