package shared

type ReportLocalPostInsightsRequest struct {
	BasicRequest   *BasicMetricsRequest `json:"basicRequest,omitempty"`
	LocalPostNames []string             `json:"localPostNames,omitempty"`
}
