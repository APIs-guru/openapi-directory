package shared

// ReportLocalPostInsightsRequest
// Request message for Insights.ReportLocalPostInsights
type ReportLocalPostInsightsRequest struct {
	BasicRequest   *BasicMetricsRequest `json:"basicRequest,omitempty"`
	LocalPostNames []string             `json:"localPostNames,omitempty"`
}
