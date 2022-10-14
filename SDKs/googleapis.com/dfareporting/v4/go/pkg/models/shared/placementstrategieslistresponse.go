package shared

type PlacementStrategiesListResponse struct {
	Kind                *string             `json:"kind,omitempty"`
	NextPageToken       *string             `json:"nextPageToken,omitempty"`
	PlacementStrategies []PlacementStrategy `json:"placementStrategies,omitempty"`
}
