package shared

type GoogleIdentityStsV1IntrospectTokenResponse struct {
	Active   *bool   `json:"active"`
	ClientID *string `json:"client_id"`
	Exp      *string `json:"exp"`
	Iat      *string `json:"iat"`
	Iss      *string `json:"iss"`
	Scope    *string `json:"scope"`
	Sub      *string `json:"sub"`
	Username *string `json:"username"`
}
