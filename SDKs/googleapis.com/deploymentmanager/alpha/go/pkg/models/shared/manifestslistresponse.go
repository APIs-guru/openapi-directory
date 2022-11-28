package shared

// ManifestsListResponse
// A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
type ManifestsListResponse struct {
	Manifests     []Manifest `json:"manifests,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
