package shared

type User struct {
	Email      *string  `json:"email"`
	Restricted *bool    `json:"restricted"`
	SSHKeys    []string `json:"ssh_keys"`
	TfaEnabled *bool    `json:"tfa_enabled"`
	Username   *string  `json:"username"`
}
