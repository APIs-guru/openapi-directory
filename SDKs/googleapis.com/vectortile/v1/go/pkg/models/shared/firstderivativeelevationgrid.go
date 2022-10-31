package shared

type FirstDerivativeElevationGrid struct {
	AltitudeMultiplier *float32 `json:"altitudeMultiplier,omitempty"`
	Rows               []Row    `json:"rows,omitempty"`
}
