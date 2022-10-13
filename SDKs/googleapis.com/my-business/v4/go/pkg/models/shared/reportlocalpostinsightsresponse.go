package shared

type ReportLocalPostInsightsResponse struct {
	LocalPostMetrics []LocalPostMetrics `json:"localPostMetrics"`
	Name             *string            `json:"name"`
	TimeZone         *string            `json:"timeZone"`
}
