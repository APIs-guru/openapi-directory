package shared

type CustomAccount struct {
	LoginURL *string `json:"loginUrl,omitempty"`
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
