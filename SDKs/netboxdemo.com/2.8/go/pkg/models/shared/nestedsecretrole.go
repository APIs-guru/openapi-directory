package shared

type NestedSecretRole struct {
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	SecretCount *int64  `json:"secret_count"`
	Slug        string  `json:"slug"`
	URL         *string `json:"url"`
}
