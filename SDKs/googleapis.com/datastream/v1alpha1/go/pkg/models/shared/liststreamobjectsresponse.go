package shared

type ListStreamObjectsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	StreamObjects []StreamObject `json:"streamObjects,omitempty"`
}
