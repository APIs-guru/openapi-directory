package shared

type TerrainTile struct {
	Coordinates      *TileCoordinates               `json:"coordinates"`
	FirstDerivative  *FirstDerivativeElevationGrid  `json:"firstDerivative"`
	Name             *string                        `json:"name"`
	SecondDerivative *SecondDerivativeElevationGrid `json:"secondDerivative"`
}
