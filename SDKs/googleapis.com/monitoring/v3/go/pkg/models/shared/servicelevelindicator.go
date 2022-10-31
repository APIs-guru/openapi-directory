package shared



type ServiceLevelIndicator struct {
    BasicSli *BasicSli `json:"basicSli,omitempty"`
    RequestBased *RequestBasedSli `json:"requestBased,omitempty"`
    WindowsBased *WindowsBasedSli `json:"windowsBased,omitempty"`
    
}

