package shared

type UserPassword struct {
	Password    *string `json:"password"`
	PasswordSet *bool   `json:"passwordSet"`
	User        *string `json:"user"`
}
