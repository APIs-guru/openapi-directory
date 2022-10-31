package shared



type PerformanceThreshold struct {
    BasicSliPerformance *BasicSli `json:"basicSliPerformance,omitempty"`
    Performance *RequestBasedSli `json:"performance,omitempty"`
    Threshold *float64 `json:"threshold,omitempty"`
    
}

