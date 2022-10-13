package shared

type RefreshTokenInfoResponse struct {
	ClientID  string   `json:"client_id"`
	HubDomain *string  `json:"hub_domain"`
	HubID     int32    `json:"hub_id"`
	Scopes    []string `json:"scopes"`
	Token     string   `json:"token"`
	TokenType string   `json:"token_type"`
	User      *string  `json:"user"`
	UserID    int32    `json:"user_id"`
}
