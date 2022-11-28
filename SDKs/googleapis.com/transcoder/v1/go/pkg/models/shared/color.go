package shared

// Color
// Color preprocessing configuration. **Note:** This configuration is not supported.
type Color struct {
	Brightness *float64 `json:"brightness,omitempty"`
	Contrast   *float64 `json:"contrast,omitempty"`
	Saturation *float64 `json:"saturation,omitempty"`
}
