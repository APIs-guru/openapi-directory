package shared

// ListPlatformsResponse
// Response message for ListPlatforms.
type ListPlatformsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Platforms     []Platform `json:"platforms,omitempty"`
}
