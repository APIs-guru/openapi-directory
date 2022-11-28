package shared

// ListReleasesResponse
// The response for FirebaseRulesService.ListReleases.
type ListReleasesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Releases      []Release `json:"releases,omitempty"`
}
