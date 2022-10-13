package shared

type LargeResponseFaultConfig struct {
	AdditionalRequestSize *int32  `json:"additionalRequestSize"`
	Ratio                 float64 `json:"ratio"`
}
