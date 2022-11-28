package shared

// Timepoint
// This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
type Timepoint struct {
	MarkName    *string  `json:"markName,omitempty"`
	TimeSeconds *float64 `json:"timeSeconds,omitempty"`
}
