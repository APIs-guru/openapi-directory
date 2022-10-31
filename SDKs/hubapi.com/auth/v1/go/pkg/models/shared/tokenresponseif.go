package shared



type TokenResponseIf struct {
    AccessToken string `json:"access_token"`
    ExpiresIn int32 `json:"expires_in"`
    IDToken *string `json:"id_token,omitempty"`
    RefreshToken string `json:"refresh_token"`
    TokenType string `json:"token_type"`
    
}

