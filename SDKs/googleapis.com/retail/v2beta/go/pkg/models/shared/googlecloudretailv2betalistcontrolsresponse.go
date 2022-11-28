package shared

// GoogleCloudRetailV2betaListControlsResponse
// Response for ListControls method.
type GoogleCloudRetailV2betaListControlsResponse struct {
	Controls      []GoogleCloudRetailV2betaControl `json:"controls,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
}
