package shared

// StartupUserDto
// The startup user DTO.
type StartupUserDto struct {
	Name     *string `json:"Name,omitempty"`
	Password *string `json:"Password,omitempty"`
}
