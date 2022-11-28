package shared

// Canary
// The configuration of the canary mode for a service descriptor
type Canary struct {
	Enabled bool     `json:"enabled"`
	Root    string   `json:"root"`
	Targets []Target `json:"targets"`
	Traffic int32    `json:"traffic"`
}
