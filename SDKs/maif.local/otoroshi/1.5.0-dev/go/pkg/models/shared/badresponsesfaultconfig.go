package shared

// BadResponsesFaultConfig
// Config for bad requests injection fault
type BadResponsesFaultConfig struct {
	Ratio     float64       `json:"ratio"`
	Responses []BadResponse `json:"responses"`
}
