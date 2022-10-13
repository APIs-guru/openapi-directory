package shared

type CustomAccount struct {
	LoginURL *string `json:"loginUrl"`
	Password *string `json:"password"`
	Username *string `json:"username"`
}
