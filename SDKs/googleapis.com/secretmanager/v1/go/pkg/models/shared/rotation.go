package shared

type Rotation struct {
	NextRotationTime *string `json:"nextRotationTime"`
	RotationPeriod   *string `json:"rotationPeriod"`
}
