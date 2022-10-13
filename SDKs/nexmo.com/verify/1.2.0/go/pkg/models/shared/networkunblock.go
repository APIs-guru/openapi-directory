package shared

type NetworkUnblock struct {
	Network         *string `json:"network"`
	UnblockDuration *int64  `json:"unblock_duration"`
}
