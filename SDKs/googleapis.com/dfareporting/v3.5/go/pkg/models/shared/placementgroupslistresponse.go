package shared

type PlacementGroupsListResponse struct {
	Kind            *string          `json:"kind,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	PlacementGroups []PlacementGroup `json:"placementGroups,omitempty"`
}
