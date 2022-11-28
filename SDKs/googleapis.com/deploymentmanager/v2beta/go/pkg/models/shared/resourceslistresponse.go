package shared

// ResourcesListResponse
// A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
type ResourcesListResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Resources     []Resource `json:"resources,omitempty"`
}
