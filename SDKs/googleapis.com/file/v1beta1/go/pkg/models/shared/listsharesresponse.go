package shared

// ListSharesResponse
// ListSharesResponse is the result of ListSharesRequest.
type ListSharesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Shares        []Share  `json:"shares,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
