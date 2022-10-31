package shared

type TimeInterval struct {
	EndDate   *Date      `json:"endDate,omitempty"`
	EndTime   *TimeOfDay `json:"endTime,omitempty"`
	StartDate *Date      `json:"startDate,omitempty"`
	StartTime *TimeOfDay `json:"startTime,omitempty"`
}
