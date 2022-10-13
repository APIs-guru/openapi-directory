package shared

type BasicAuthentication struct {
	Password *string `json:"password"`
	Username *string `json:"username"`
}
