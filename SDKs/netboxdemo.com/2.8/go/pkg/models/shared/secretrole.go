package shared

type SecretRole struct {
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	SecretCount *int64  `json:"secret_count"`
	Slug        string  `json:"slug"`
}
