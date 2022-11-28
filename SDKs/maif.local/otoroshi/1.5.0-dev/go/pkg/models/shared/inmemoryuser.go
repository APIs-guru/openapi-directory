package shared

// InMemoryUser
// A user
type InMemoryUser struct {
	Email    string            `json:"email"`
	Metadata map[string]string `json:"metadata"`
	Name     string            `json:"name"`
	Password string            `json:"password"`
}
