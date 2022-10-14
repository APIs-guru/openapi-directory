package shared

type BasicAuth struct {
	Password *string `json:"password,omitempty"`
	User     *string `json:"user,omitempty"`
}
