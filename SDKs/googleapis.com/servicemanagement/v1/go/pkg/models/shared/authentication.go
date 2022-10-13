package shared

type Authentication struct {
	Providers []AuthProvider       `json:"providers"`
	Rules     []AuthenticationRule `json:"rules"`
}
