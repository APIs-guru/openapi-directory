package shared

// ListTagValuesResponse
// The ListTagValues response.
type ListTagValuesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	TagValues     []TagValue `json:"tagValues,omitempty"`
}
