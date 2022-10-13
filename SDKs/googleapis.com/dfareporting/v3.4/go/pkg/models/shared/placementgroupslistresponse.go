package shared

type PlacementGroupsListResponse struct {
	Kind            *string          `json:"kind"`
	NextPageToken   *string          `json:"nextPageToken"`
	PlacementGroups []PlacementGroup `json:"placementGroups"`
}
