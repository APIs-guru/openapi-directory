package shared



type ComputeTimeCursorRequest struct {
    Partition *string `json:"partition,omitempty"`
    Target *TimeTarget `json:"target,omitempty"`
    
}

