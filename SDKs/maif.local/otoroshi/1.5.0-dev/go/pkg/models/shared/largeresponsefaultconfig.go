package shared

type LargeResponseFaultConfig struct {
	AdditionalRequestSize *int32  `json:"additionalRequestSize,omitempty"`
	Ratio                 float64 `json:"ratio"`
}
