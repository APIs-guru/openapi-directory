package shared



type Grade struct {
    Correct *bool `json:"correct,omitempty"`
    Feedback *Feedback `json:"feedback,omitempty"`
    Score *float64 `json:"score,omitempty"`
    
}

