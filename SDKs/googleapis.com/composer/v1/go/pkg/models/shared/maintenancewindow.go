package shared

type MaintenanceWindow struct {
	EndTime    *string `json:"endTime"`
	Recurrence *string `json:"recurrence"`
	StartTime  *string `json:"startTime"`
}
