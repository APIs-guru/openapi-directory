package shared

type SecretRole struct {
	ID   *int64 `json:"id,omitempty"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type SecretRoleInput struct {
	Name string `json:"name"`
	Slug string `json:"slug"`
}
