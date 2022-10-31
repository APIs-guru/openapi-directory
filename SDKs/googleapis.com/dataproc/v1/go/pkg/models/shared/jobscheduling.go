package shared



type JobScheduling struct {
    MaxFailuresPerHour *int32 `json:"maxFailuresPerHour,omitempty"`
    MaxFailuresTotal *int32 `json:"maxFailuresTotal,omitempty"`
    
}

