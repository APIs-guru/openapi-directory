package shared

// PlacementsGenerateTagsResponse
// Placement GenerateTags Response
type PlacementsGenerateTagsResponse struct {
	Kind          *string        `json:"kind,omitempty"`
	PlacementTags []PlacementTag `json:"placementTags,omitempty"`
}
