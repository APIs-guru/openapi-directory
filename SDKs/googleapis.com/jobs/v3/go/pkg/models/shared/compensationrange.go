package shared

// CompensationRange
// Compensation range.
type CompensationRange struct {
	MaxCompensation *Money `json:"maxCompensation,omitempty"`
	MinCompensation *Money `json:"minCompensation,omitempty"`
}
