package shared

type LockConfig struct {
	Locked *bool   `json:"locked,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
