package shared

type TimeWindow struct {
	EndTime                     *string                      `json:"endTime"`
	MaintenanceExclusionOptions *MaintenanceExclusionOptions `json:"maintenanceExclusionOptions"`
	StartTime                   *string                      `json:"startTime"`
}
