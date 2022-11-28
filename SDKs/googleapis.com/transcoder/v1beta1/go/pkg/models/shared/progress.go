package shared

// Progress
// Estimated fractional progress for each step, from `0` to `1`.
type Progress struct {
	Analyzed *float64 `json:"analyzed,omitempty"`
	Encoded  *float64 `json:"encoded,omitempty"`
	Notified *float64 `json:"notified,omitempty"`
	Uploaded *float64 `json:"uploaded,omitempty"`
}
