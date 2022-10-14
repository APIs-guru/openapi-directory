package shared

type GoogleAccount struct {
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
