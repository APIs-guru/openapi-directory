package shared

type CreateUserByName struct {
	Name     *string `json:"Name,omitempty"`
	Password *string `json:"Password,omitempty"`
}
