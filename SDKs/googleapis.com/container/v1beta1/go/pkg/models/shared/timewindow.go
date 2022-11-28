package shared

// TimeWindow
// Represents an arbitrary window of time.
type TimeWindow struct {
	EndTime                     *string                      `json:"endTime,omitempty"`
	MaintenanceExclusionOptions *MaintenanceExclusionOptions `json:"maintenanceExclusionOptions,omitempty"`
	StartTime                   *string                      `json:"startTime,omitempty"`
}
