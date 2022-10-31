package shared

type ReportLocationInsightsResponse struct {
	LocationDrivingDirectionMetrics []LocationDrivingDirectionMetrics `json:"locationDrivingDirectionMetrics,omitempty"`
	LocationMetrics                 []LocationMetrics                 `json:"locationMetrics,omitempty"`
}
