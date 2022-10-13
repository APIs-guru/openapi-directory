package shared

type AggregateMetrics struct {
	AnsweredCallsCount *int32           `json:"answeredCallsCount"`
	EndDate            *Date            `json:"endDate"`
	HourlyMetrics      []HourlyMetrics  `json:"hourlyMetrics"`
	MissedCallsCount   *int32           `json:"missedCallsCount"`
	StartDate          *Date            `json:"startDate"`
	WeekdayMetrics     []WeekDayMetrics `json:"weekdayMetrics"`
}
