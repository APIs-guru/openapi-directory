package shared

// ListTunnelDestGroupsResponse
// The response from ListTunnelDestGroups.
type ListTunnelDestGroupsResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	TunnelDestGroups []TunnelDestGroup `json:"tunnelDestGroups,omitempty"`
}
