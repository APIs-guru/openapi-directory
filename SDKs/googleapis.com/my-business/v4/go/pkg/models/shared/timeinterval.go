package shared

type TimeInterval struct {
	EndDate   *Date      `json:"endDate"`
	EndTime   *TimeOfDay `json:"endTime"`
	StartDate *Date      `json:"startDate"`
	StartTime *TimeOfDay `json:"startTime"`
}
