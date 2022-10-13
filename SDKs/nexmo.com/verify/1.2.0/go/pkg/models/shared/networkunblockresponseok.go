package shared

type NetworkUnblockResponseOk struct {
	Network        *string `json:"network"`
	UnblockedUntil *string `json:"unblocked_until"`
}
