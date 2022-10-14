package shared

type ListTunnelDestGroupsResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	TunnelDestGroups []TunnelDestGroup `json:"tunnelDestGroups,omitempty"`
}
