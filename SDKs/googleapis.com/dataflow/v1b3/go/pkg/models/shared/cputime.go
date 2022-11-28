package shared

// CPUTime
// Modeled after information exposed by /proc/stat.
type CPUTime struct {
	Rate      *float64 `json:"rate,omitempty"`
	Timestamp *string  `json:"timestamp,omitempty"`
	TotalMs   *string  `json:"totalMs,omitempty"`
}
