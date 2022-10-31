package shared



type SchedulePolicy struct {
    IdleDuration *string `json:"idleDuration,omitempty"`
    SkipOsAdaptation *bool `json:"skipOsAdaptation,omitempty"`
    
}

