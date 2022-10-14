package shared

type ReportLocationInsightsRequest struct {
	BasicRequest             *BasicMetricsRequest            `json:"basicRequest,omitempty"`
	DrivingDirectionsRequest *DrivingDirectionMetricsRequest `json:"drivingDirectionsRequest,omitempty"`
	LocationNames            []string                        `json:"locationNames,omitempty"`
}
