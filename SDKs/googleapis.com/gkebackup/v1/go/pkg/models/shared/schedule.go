package shared



type Schedule struct {
    CronSchedule *string `json:"cronSchedule,omitempty"`
    Paused *bool `json:"paused,omitempty"`
    
}

