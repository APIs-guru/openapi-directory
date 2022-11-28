package shared

// GoogleCloudMlV1ListVersionsResponse
// Response message for the ListVersions method.
type GoogleCloudMlV1ListVersionsResponse struct {
	NextPageToken *string                  `json:"nextPageToken,omitempty"`
	Versions      []GoogleCloudMlV1Version `json:"versions,omitempty"`
}
