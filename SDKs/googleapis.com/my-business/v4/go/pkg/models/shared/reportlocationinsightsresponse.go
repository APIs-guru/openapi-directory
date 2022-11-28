package shared

// ReportLocationInsightsResponse
// Response message for `Insights.ReportLocationInsights`.
type ReportLocationInsightsResponse struct {
	LocationDrivingDirectionMetrics []LocationDrivingDirectionMetrics `json:"locationDrivingDirectionMetrics,omitempty"`
	LocationMetrics                 []LocationMetrics                 `json:"locationMetrics,omitempty"`
}
