package shared

type GoogleCloudContactcenterinsightsV1ListViewsResponse struct {
	NextPageToken *string                                  `json:"nextPageToken"`
	Views         []GoogleCloudContactcenterinsightsV1View `json:"views"`
}
