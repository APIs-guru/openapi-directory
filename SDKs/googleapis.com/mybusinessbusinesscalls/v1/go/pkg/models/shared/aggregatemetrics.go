package shared

type AggregateMetrics struct {
	AnsweredCallsCount *int32           `json:"answeredCallsCount,omitempty"`
	EndDate            *Date            `json:"endDate,omitempty"`
	HourlyMetrics      []HourlyMetrics  `json:"hourlyMetrics,omitempty"`
	MissedCallsCount   *int32           `json:"missedCallsCount,omitempty"`
	StartDate          *Date            `json:"startDate,omitempty"`
	WeekdayMetrics     []WeekDayMetrics `json:"weekdayMetrics,omitempty"`
}
