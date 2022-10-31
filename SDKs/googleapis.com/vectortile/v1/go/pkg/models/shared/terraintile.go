package shared

type TerrainTile struct {
	Coordinates      *TileCoordinates               `json:"coordinates,omitempty"`
	FirstDerivative  *FirstDerivativeElevationGrid  `json:"firstDerivative,omitempty"`
	Name             *string                        `json:"name,omitempty"`
	SecondDerivative *SecondDerivativeElevationGrid `json:"secondDerivative,omitempty"`
}
