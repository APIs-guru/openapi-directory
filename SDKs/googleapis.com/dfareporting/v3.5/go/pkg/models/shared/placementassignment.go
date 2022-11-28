package shared

// PlacementAssignment
// Placement Assignment.
type PlacementAssignment struct {
	Active                    *bool           `json:"active,omitempty"`
	PlacementID               *string         `json:"placementId,omitempty"`
	PlacementIDDimensionValue *DimensionValue `json:"placementIdDimensionValue,omitempty"`
	SslRequired               *bool           `json:"sslRequired,omitempty"`
}
