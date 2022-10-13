package shared

type ReportLocationInsightsResponse struct {
	LocationDrivingDirectionMetrics []LocationDrivingDirectionMetrics `json:"locationDrivingDirectionMetrics"`
	LocationMetrics                 []LocationMetrics                 `json:"locationMetrics"`
}
