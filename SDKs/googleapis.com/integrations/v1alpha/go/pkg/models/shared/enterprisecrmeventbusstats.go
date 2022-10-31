package shared



type EnterpriseCrmEventbusStats struct {
    Dimensions *EnterpriseCrmEventbusStatsDimensions `json:"dimensions,omitempty"`
    DurationInSeconds *float64 `json:"durationInSeconds,omitempty"`
    ErrorRate *float64 `json:"errorRate,omitempty"`
    QPS *float64 `json:"qps,omitempty"`
    WarningRate *float64 `json:"warningRate,omitempty"`
    
}

