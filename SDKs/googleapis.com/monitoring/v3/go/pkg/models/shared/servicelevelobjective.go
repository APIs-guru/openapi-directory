package shared

type ServiceLevelObjectiveCalendarPeriodEnum string

const (
	ServiceLevelObjectiveCalendarPeriodEnumCalendarPeriodUnspecified ServiceLevelObjectiveCalendarPeriodEnum = "CALENDAR_PERIOD_UNSPECIFIED"
	ServiceLevelObjectiveCalendarPeriodEnumDay                       ServiceLevelObjectiveCalendarPeriodEnum = "DAY"
	ServiceLevelObjectiveCalendarPeriodEnumWeek                      ServiceLevelObjectiveCalendarPeriodEnum = "WEEK"
	ServiceLevelObjectiveCalendarPeriodEnumFortnight                 ServiceLevelObjectiveCalendarPeriodEnum = "FORTNIGHT"
	ServiceLevelObjectiveCalendarPeriodEnumMonth                     ServiceLevelObjectiveCalendarPeriodEnum = "MONTH"
	ServiceLevelObjectiveCalendarPeriodEnumQuarter                   ServiceLevelObjectiveCalendarPeriodEnum = "QUARTER"
	ServiceLevelObjectiveCalendarPeriodEnumHalf                      ServiceLevelObjectiveCalendarPeriodEnum = "HALF"
	ServiceLevelObjectiveCalendarPeriodEnumYear                      ServiceLevelObjectiveCalendarPeriodEnum = "YEAR"
)

// ServiceLevelObjective
// A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully."
type ServiceLevelObjective struct {
	CalendarPeriod        *ServiceLevelObjectiveCalendarPeriodEnum `json:"calendarPeriod,omitempty"`
	DisplayName           *string                                  `json:"displayName,omitempty"`
	Goal                  *float64                                 `json:"goal,omitempty"`
	Name                  *string                                  `json:"name,omitempty"`
	RollingPeriod         *string                                  `json:"rollingPeriod,omitempty"`
	ServiceLevelIndicator *ServiceLevelIndicator                   `json:"serviceLevelIndicator,omitempty"`
	UserLabels            map[string]string                        `json:"userLabels,omitempty"`
}
