package shared

// GoogleCloudRetailV2alphaListControlsResponse
// Response for ListControls method.
type GoogleCloudRetailV2alphaListControlsResponse struct {
	Controls      []GoogleCloudRetailV2alphaControl `json:"controls,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
