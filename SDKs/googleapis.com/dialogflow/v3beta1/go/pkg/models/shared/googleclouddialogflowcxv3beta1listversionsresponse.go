package shared

// GoogleCloudDialogflowCxV3beta1ListVersionsResponse
// The response message for Versions.ListVersions.
type GoogleCloudDialogflowCxV3beta1ListVersionsResponse struct {
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
	Versions      []GoogleCloudDialogflowCxV3beta1Version `json:"versions,omitempty"`
}
