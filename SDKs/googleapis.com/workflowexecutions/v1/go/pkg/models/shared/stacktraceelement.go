package shared



type StackTraceElement struct {
    Position *Position `json:"position,omitempty"`
    Routine *string `json:"routine,omitempty"`
    Step *string `json:"step,omitempty"`
    
}

