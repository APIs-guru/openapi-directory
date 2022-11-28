package shared

// Level
// Level information containing level number and its corresponding name.
type Level struct {
	Name   *string  `json:"name,omitempty"`
	Number *float64 `json:"number,omitempty"`
}
