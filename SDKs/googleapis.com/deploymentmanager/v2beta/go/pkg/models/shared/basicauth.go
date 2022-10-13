package shared

type BasicAuth struct {
	Password *string `json:"password"`
	User     *string `json:"user"`
}
