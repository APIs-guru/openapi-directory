package shared

// LargeRequestFaultConfig
// Config for large request injection fault
type LargeRequestFaultConfig struct {
	AdditionalRequestSize int32   `json:"additionalRequestSize"`
	Ratio                 float64 `json:"ratio"`
}
