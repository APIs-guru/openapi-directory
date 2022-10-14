package shared

type NetworkUnblock struct {
	Network         *string `json:"network,omitempty"`
	UnblockDuration *int64  `json:"unblock_duration,omitempty"`
}
