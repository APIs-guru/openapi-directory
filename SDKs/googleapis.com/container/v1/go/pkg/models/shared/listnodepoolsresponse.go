package shared

// ListNodePoolsResponse
// ListNodePoolsResponse is the result of ListNodePoolsRequest.
type ListNodePoolsResponse struct {
	NodePools []NodePool `json:"nodePools,omitempty"`
}
