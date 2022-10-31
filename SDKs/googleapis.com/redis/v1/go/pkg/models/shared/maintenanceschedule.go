package shared



type MaintenanceSchedule struct {
    CanReschedule *bool `json:"canReschedule,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    ScheduleDeadlineTime *string `json:"scheduleDeadlineTime,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    
}

