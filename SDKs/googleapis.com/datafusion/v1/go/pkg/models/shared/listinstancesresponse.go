package shared

// ListInstancesResponse
// Response message for the list instance request.
type ListInstancesResponse struct {
	Instances     []Instance `json:"instances,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
