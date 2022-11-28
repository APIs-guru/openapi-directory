package shared

// AsyncOptions
// Async options that determine when a resource should finish.
type AsyncOptions struct {
	MethodMatch    *string         `json:"methodMatch,omitempty"`
	PollingOptions *PollingOptions `json:"pollingOptions,omitempty"`
}
