package shared

// Detection
// Memory hash detection contributing to the binary family match.
type Detection struct {
	Binary              *string  `json:"binary,omitempty"`
	PercentPagesMatched *float64 `json:"percentPagesMatched,omitempty"`
}
