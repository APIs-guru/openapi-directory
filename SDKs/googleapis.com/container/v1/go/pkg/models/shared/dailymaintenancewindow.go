package shared

// DailyMaintenanceWindow
// Time window specified for daily maintenance operations.
type DailyMaintenanceWindow struct {
	Duration  *string `json:"duration,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
