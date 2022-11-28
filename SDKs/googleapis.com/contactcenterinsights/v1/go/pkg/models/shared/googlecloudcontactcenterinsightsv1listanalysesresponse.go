package shared

// GoogleCloudContactcenterinsightsV1ListAnalysesResponse
// The response to list analyses.
type GoogleCloudContactcenterinsightsV1ListAnalysesResponse struct {
	Analyses      []GoogleCloudContactcenterinsightsV1Analysis `json:"analyses,omitempty"`
	NextPageToken *string                                      `json:"nextPageToken,omitempty"`
}
