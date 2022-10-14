package shared

type NodeConfigDefaults struct {
	GcfsConfig    *GcfsConfig            `json:"gcfsConfig,omitempty"`
	LoggingConfig *NodePoolLoggingConfig `json:"loggingConfig,omitempty"`
}
