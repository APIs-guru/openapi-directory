package shared

type GoogleIdentityStsV1ExchangeTokenResponse struct {
	AccessToken     *string `json:"access_token"`
	ExpiresIn       *int32  `json:"expires_in"`
	IssuedTokenType *string `json:"issued_token_type"`
	TokenType       *string `json:"token_type"`
}
