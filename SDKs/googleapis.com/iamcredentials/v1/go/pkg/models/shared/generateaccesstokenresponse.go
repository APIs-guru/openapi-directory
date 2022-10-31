package shared



type GenerateAccessTokenResponse struct {
    AccessToken *string `json:"accessToken,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    
}

