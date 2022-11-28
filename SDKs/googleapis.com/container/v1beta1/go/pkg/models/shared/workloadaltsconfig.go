package shared

// WorkloadAltsConfig
// Configuration for direct-path (via ALTS) with workload identity.
type WorkloadAltsConfig struct {
	EnableAlts *bool `json:"enableAlts,omitempty"`
}
