package shared



type SessionResponse struct {
    AccessToken *string `json:"accessToken,omitempty"`
    ExpiresIn *int64 `json:"expiresIn,omitempty"`
    RefreshExpiresIn *int64 `json:"refreshExpiresIn,omitempty"`
    RefreshToken *string `json:"refreshToken,omitempty"`
    TokenType *string `json:"tokenType,omitempty"`
    
}

