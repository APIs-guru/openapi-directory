package shared

type FirstDerivativeElevationGrid struct {
	AltitudeMultiplier *float32 `json:"altitudeMultiplier"`
	Rows               []Row    `json:"rows"`
}
