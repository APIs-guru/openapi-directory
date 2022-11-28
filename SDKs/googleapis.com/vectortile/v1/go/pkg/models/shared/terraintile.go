package shared

// TerrainTile
// A tile containing information about the terrain located in the region it covers.
type TerrainTile struct {
	Coordinates      *TileCoordinates               `json:"coordinates,omitempty"`
	FirstDerivative  *FirstDerivativeElevationGrid  `json:"firstDerivative,omitempty"`
	Name             *string                        `json:"name,omitempty"`
	SecondDerivative *SecondDerivativeElevationGrid `json:"secondDerivative,omitempty"`
}
