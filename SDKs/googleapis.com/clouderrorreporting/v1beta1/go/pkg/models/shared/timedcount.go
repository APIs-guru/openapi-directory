package shared

type TimedCount struct {
	Count     *string `json:"count"`
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}
