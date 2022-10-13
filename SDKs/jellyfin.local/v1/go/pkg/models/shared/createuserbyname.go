package shared

type CreateUserByName struct {
	Name     *string `json:"Name"`
	Password *string `json:"Password"`
}
