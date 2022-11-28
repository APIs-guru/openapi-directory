package shared

// ListReleasesResponse
// Response message for ListReleases.
type ListReleasesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Releases      []Release `json:"releases,omitempty"`
}
