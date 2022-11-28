package shared

// GoogleCloudContactcenterinsightsV1ListViewsResponse
// The response of listing views.
type GoogleCloudContactcenterinsightsV1ListViewsResponse struct {
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
	Views         []GoogleCloudContactcenterinsightsV1View `json:"views,omitempty"`
}
