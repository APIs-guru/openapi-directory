package shared

type NodeConfigDefaults struct {
	GcfsConfig    *GcfsConfig            `json:"gcfsConfig"`
	LoggingConfig *NodePoolLoggingConfig `json:"loggingConfig"`
}
