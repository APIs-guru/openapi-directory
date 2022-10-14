package shared

type DailyMaintenanceWindow struct {
	Duration  *string `json:"duration,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
