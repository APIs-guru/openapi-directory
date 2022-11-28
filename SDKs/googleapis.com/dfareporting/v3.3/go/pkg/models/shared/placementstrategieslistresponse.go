package shared

// PlacementStrategiesListResponse
// Placement Strategy List Response
type PlacementStrategiesListResponse struct {
	Kind                *string             `json:"kind,omitempty"`
	NextPageToken       *string             `json:"nextPageToken,omitempty"`
	PlacementStrategies []PlacementStrategy `json:"placementStrategies,omitempty"`
}
