package shared

// ListAvailableVersionsResponse
// Response message for the list available versions request.
type ListAvailableVersionsResponse struct {
	AvailableVersions []Version `json:"availableVersions,omitempty"`
	NextPageToken     *string   `json:"nextPageToken,omitempty"`
}
