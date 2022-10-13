package shared

type AuthenticatorConfigRepresentation struct {
	Alias  *string                `json:"alias"`
	Config map[string]interface{} `json:"config"`
	ID     *string                `json:"id"`
}
