package shared



type ReportLocalPostInsightsResponse struct {
    LocalPostMetrics []LocalPostMetrics `json:"localPostMetrics,omitempty"`
    Name *string `json:"name,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    
}

