package shared

type HourlyMetrics struct {
	Hour             *int32 `json:"hour"`
	MissedCallsCount *int32 `json:"missedCallsCount"`
}
