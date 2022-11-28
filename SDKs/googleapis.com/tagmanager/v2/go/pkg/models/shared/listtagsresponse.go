package shared

// ListTagsResponse
// List Tags Response.
type ListTagsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tag           []Tag   `json:"tag,omitempty"`
}
