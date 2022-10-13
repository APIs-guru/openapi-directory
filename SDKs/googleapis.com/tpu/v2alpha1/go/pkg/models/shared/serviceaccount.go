package shared

type ServiceAccount struct {
	Email *string  `json:"email"`
	Scope []string `json:"scope"`
}
