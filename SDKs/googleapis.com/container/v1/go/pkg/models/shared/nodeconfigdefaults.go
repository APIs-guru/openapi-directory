package shared

// NodeConfigDefaults
// Subset of NodeConfig message that has defaults.
type NodeConfigDefaults struct {
	GcfsConfig    *GcfsConfig            `json:"gcfsConfig,omitempty"`
	LoggingConfig *NodePoolLoggingConfig `json:"loggingConfig,omitempty"`
}
