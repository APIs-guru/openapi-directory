package shared

type PlacementStrategiesListResponse struct {
	Kind                *string             `json:"kind"`
	NextPageToken       *string             `json:"nextPageToken"`
	PlacementStrategies []PlacementStrategy `json:"placementStrategies"`
}
