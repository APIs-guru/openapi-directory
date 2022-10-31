package shared



type RichMediaExitOverride struct {
    ClickThroughURL *ClickThroughURL `json:"clickThroughUrl,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ExitID *string `json:"exitId,omitempty"`
    
}

