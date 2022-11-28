package shared

// NetworkUnblockResponseOk
// Success
type NetworkUnblockResponseOk struct {
	Network        *string `json:"network,omitempty"`
	UnblockedUntil *string `json:"unblocked_until,omitempty"`
}
