package shared

// GoogleCloudDialogflowV2ListVersionsResponse
// The response message for Versions.ListVersions.
type GoogleCloudDialogflowV2ListVersionsResponse struct {
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
	Versions      []GoogleCloudDialogflowV2Version `json:"versions,omitempty"`
}
