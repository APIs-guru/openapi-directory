package shared

// GoogleCloudDialogflowV2beta1ListVersionsResponse
// The response message for Versions.ListVersions.
type GoogleCloudDialogflowV2beta1ListVersionsResponse struct {
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
	Versions      []GoogleCloudDialogflowV2beta1Version `json:"versions,omitempty"`
}
