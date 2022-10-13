package shared

type AsyncOptions struct {
	MethodMatch    *string         `json:"methodMatch"`
	PollingOptions *PollingOptions `json:"pollingOptions"`
}
