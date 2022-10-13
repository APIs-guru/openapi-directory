package shared

type ServiceAccount struct {
	Email  *string  `json:"email"`
	Scopes []string `json:"scopes"`
}
