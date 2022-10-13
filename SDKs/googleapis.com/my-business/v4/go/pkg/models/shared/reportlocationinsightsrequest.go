package shared

type ReportLocationInsightsRequest struct {
	BasicRequest             *BasicMetricsRequest            `json:"basicRequest"`
	DrivingDirectionsRequest *DrivingDirectionMetricsRequest `json:"drivingDirectionsRequest"`
	LocationNames            []string                        `json:"locationNames"`
}
