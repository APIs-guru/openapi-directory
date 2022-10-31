package shared



type MaintenanceWindow struct {
    EndTime *string `json:"endTime,omitempty"`
    Recurrence *string `json:"recurrence,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    
}

