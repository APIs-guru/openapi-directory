package shared

type PasswordStatus struct {
	Locked                 *bool   `json:"locked"`
	PasswordExpirationTime *string `json:"passwordExpirationTime"`
}
