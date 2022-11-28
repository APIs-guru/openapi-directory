package shared

// TimeInterval
// An interval of time, inclusive. It must contain all fields to be valid.
type TimeInterval struct {
	EndDate   *Date      `json:"endDate,omitempty"`
	EndTime   *TimeOfDay `json:"endTime,omitempty"`
	StartDate *Date      `json:"startDate,omitempty"`
	StartTime *TimeOfDay `json:"startTime,omitempty"`
}
