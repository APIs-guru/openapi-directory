package shared

// ListStreamObjectsResponse
// Response containing the objects for a stream.
type ListStreamObjectsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	StreamObjects []StreamObject `json:"streamObjects,omitempty"`
}
