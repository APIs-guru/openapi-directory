package shared



type NonCompliantFile struct {
    DisplayCommand *string `json:"displayCommand,omitempty"`
    Path *string `json:"path,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

