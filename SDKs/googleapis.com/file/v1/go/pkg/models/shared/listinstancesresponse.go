package shared

// ListInstancesResponse
// ListInstancesResponse is the result of ListInstancesRequest.
type ListInstancesResponse struct {
	Instances     []Instance `json:"instances,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
