package shared

type UserPassword struct {
	Password    *string `json:"password,omitempty"`
	PasswordSet *bool   `json:"passwordSet,omitempty"`
	User        *string `json:"user,omitempty"`
}
