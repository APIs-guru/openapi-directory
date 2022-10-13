package shared

type ReportLocalPostInsightsRequest struct {
	BasicRequest   *BasicMetricsRequest `json:"basicRequest"`
	LocalPostNames []string             `json:"localPostNames"`
}
