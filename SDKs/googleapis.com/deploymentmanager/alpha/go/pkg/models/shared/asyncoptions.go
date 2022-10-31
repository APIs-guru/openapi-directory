package shared

type AsyncOptions struct {
	MethodMatch    *string         `json:"methodMatch,omitempty"`
	PollingOptions *PollingOptions `json:"pollingOptions,omitempty"`
}
