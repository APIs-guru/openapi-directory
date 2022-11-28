package shared

// GoogleCloudDialogflowCxV3ListVersionsResponse
// The response message for Versions.ListVersions.
type GoogleCloudDialogflowCxV3ListVersionsResponse struct {
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
	Versions      []GoogleCloudDialogflowCxV3Version `json:"versions,omitempty"`
}
