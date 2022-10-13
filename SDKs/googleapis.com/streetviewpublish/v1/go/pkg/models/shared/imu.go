package shared

type Imu struct {
	AccelMpsps []Measurement3d `json:"accelMpsps"`
	GyroRps    []Measurement3d `json:"gyroRps"`
	MagUt      []Measurement3d `json:"magUt"`
}
