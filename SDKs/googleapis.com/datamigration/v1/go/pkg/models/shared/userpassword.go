package shared

// UserPasswordInput
// The username/password for a database user. Used for specifying initial users at cluster creation time.
type UserPasswordInput struct {
	Password *string `json:"password,omitempty"`
	User     *string `json:"user,omitempty"`
}

// UserPassword
// The username/password for a database user. Used for specifying initial users at cluster creation time.
type UserPassword struct {
	Password    *string `json:"password,omitempty"`
	PasswordSet *bool   `json:"passwordSet,omitempty"`
	User        *string `json:"user,omitempty"`
}
