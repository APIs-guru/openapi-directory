package shared

type GoogleCloudContactcenterinsightsV1ListAnalysesResponse struct {
	Analyses      []GoogleCloudContactcenterinsightsV1Analysis `json:"analyses"`
	NextPageToken *string                                      `json:"nextPageToken"`
}
