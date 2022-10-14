package shared

type SecretRole struct {
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	SecretCount *int64  `json:"secret_count,omitempty"`
	Slug        string  `json:"slug"`
}
