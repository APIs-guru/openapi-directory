package shared

type PlacementAssignment struct {
	Active                    *bool           `json:"active"`
	PlacementID               *string         `json:"placementId"`
	PlacementIDDimensionValue *DimensionValue `json:"placementIdDimensionValue"`
	SslRequired               *bool           `json:"sslRequired"`
}
