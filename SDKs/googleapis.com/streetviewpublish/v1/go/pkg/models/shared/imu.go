package shared

// Imu
// IMU data from the device sensors.
type Imu struct {
	AccelMpsps []Measurement3d `json:"accelMpsps,omitempty"`
	GyroRps    []Measurement3d `json:"gyroRps,omitempty"`
	MagUt      []Measurement3d `json:"magUt,omitempty"`
}
