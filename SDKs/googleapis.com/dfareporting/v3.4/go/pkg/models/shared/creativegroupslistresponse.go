package shared

type CreativeGroupsListResponse struct {
	CreativeGroups []CreativeGroup `json:"creativeGroups,omitempty"`
	Kind           *string         `json:"kind,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
