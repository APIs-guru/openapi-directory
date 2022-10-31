package shared

type ServiceAccount struct {
	Email *string  `json:"email,omitempty"`
	Scope []string `json:"scope,omitempty"`
}
