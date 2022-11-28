package shared

// UserInput
// A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
type UserInput struct {
	Restricted *bool    `json:"restricted,omitempty"`
	SSHKeys    []string `json:"ssh_keys,omitempty"`
	Username   *string  `json:"username,omitempty"`
}

// User
// A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
type User struct {
	Email      *string  `json:"email,omitempty"`
	Restricted *bool    `json:"restricted,omitempty"`
	SSHKeys    []string `json:"ssh_keys,omitempty"`
	TfaEnabled *bool    `json:"tfa_enabled,omitempty"`
	Username   *string  `json:"username,omitempty"`
}
