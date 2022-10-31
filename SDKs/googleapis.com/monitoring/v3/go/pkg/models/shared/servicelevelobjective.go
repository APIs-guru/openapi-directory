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
	CalendarPeriod        *ServiceLevelObjectiveCalendarPeriodEnum `json:"calendarPeriod,omitempty"`
	DisplayName           *string                                  `json:"displayName,omitempty"`
	Goal                  *float64                                 `json:"goal,omitempty"`
	Name                  *string                                  `json:"name,omitempty"`
	RollingPeriod         *string                                  `json:"rollingPeriod,omitempty"`
	ServiceLevelIndicator *ServiceLevelIndicator                   `json:"serviceLevelIndicator,omitempty"`
	UserLabels            map[string]string                        `json:"userLabels,omitempty"`
}
