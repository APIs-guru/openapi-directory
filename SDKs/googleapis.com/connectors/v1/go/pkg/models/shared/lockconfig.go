package shared

type LockConfig struct {
	Locked *bool   `json:"locked"`
	Reason *string `json:"reason"`
}
