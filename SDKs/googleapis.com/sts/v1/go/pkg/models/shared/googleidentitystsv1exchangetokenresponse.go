package shared



type GoogleIdentityStsV1ExchangeTokenResponse struct {
    AccessToken *string `json:"access_token,omitempty"`
    ExpiresIn *int32 `json:"expires_in,omitempty"`
    IssuedTokenType *string `json:"issued_token_type,omitempty"`
    TokenType *string `json:"token_type,omitempty"`
    
}

