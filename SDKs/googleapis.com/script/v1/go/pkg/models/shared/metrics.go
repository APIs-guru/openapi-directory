package shared



type Metrics struct {
    ActiveUsers []MetricsValue `json:"activeUsers,omitempty"`
    FailedExecutions []MetricsValue `json:"failedExecutions,omitempty"`
    TotalExecutions []MetricsValue `json:"totalExecutions,omitempty"`
    
}

