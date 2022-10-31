package shared

type PasswordStatus struct {
	Locked                 *bool   `json:"locked,omitempty"`
	PasswordExpirationTime *string `json:"passwordExpirationTime,omitempty"`
}
