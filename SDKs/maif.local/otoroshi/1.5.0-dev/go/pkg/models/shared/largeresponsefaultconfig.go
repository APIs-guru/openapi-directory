package shared

// LargeResponseFaultConfig
// Config for large response injection fault
type LargeResponseFaultConfig struct {
	AdditionalRequestSize *int32  `json:"additionalRequestSize,omitempty"`
	Ratio                 float64 `json:"ratio"`
}
