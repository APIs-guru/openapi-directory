package shared

// RgbColor
// An RGB color.
type RgbColor struct {
	Blue  *float32 `json:"blue,omitempty"`
	Green *float32 `json:"green,omitempty"`
	Red   *float32 `json:"red,omitempty"`
}
