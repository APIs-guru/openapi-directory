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

type ServiceLevelObjective struct {
	CalendarPeriod        *ServiceLevelObjectiveCalendarPeriodEnum `json:"calendarPeriod"`
	DisplayName           *string                                  `json:"displayName"`
	Goal                  *float64                                 `json:"goal"`
	Name                  *string                                  `json:"name"`
	RollingPeriod         *string                                  `json:"rollingPeriod"`
	ServiceLevelIndicator *ServiceLevelIndicator                   `json:"serviceLevelIndicator"`
	UserLabels            map[string]string                        `json:"userLabels"`
}
