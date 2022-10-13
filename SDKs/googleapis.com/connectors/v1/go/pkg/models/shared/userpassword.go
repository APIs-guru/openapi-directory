package shared

type UserPassword struct {
	Password *Secret `json:"password"`
	Username *string `json:"username"`
}
