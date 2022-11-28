package shared

// ListConnectionsResponse
// ListConnectionsResponse is the response to list peering states for the given service and consumer project.
type ListConnectionsResponse struct {
	Connections []Connection `json:"connections,omitempty"`
}
