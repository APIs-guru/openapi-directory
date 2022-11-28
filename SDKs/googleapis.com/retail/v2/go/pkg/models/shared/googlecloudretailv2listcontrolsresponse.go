package shared

// GoogleCloudRetailV2ListControlsResponse
// Response for ListControls method.
type GoogleCloudRetailV2ListControlsResponse struct {
	Controls      []GoogleCloudRetailV2Control `json:"controls,omitempty"`
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
}
