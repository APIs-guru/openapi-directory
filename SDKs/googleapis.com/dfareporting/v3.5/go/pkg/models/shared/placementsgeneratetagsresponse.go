package shared

type PlacementsGenerateTagsResponse struct {
	Kind          *string        `json:"kind"`
	PlacementTags []PlacementTag `json:"placementTags"`
}
