package shared

type CreativeGroupsListResponse struct {
	CreativeGroups []CreativeGroup `json:"creativeGroups"`
	Kind           *string         `json:"kind"`
	NextPageToken  *string         `json:"nextPageToken"`
}
