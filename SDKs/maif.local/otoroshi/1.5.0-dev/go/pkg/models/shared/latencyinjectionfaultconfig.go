package shared

// LatencyInjectionFaultConfig
// Config for large latency injection fault
type LatencyInjectionFaultConfig struct {
	From  int32   `json:"from"`
	Ratio float64 `json:"ratio"`
	To    int32   `json:"to"`
}
