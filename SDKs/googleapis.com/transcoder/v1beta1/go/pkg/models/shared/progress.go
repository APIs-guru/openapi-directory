package shared



type Progress struct {
    Analyzed *float64 `json:"analyzed,omitempty"`
    Encoded *float64 `json:"encoded,omitempty"`
    Notified *float64 `json:"notified,omitempty"`
    Uploaded *float64 `json:"uploaded,omitempty"`
    
}

