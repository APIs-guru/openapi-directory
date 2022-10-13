package shared

type ListTunnelDestGroupsResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	TunnelDestGroups []TunnelDestGroup `json:"tunnelDestGroups"`
}
