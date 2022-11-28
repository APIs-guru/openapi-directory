package shared

// CreateUserByName
// The create user by name request body.
type CreateUserByName struct {
	Name     *string `json:"Name,omitempty"`
	Password *string `json:"Password,omitempty"`
}
