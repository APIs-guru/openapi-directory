package shared




type SessionRequestGrantTypeEnum string

const (
    SessionRequestGrantTypeEnumClientCredentials SessionRequestGrantTypeEnum = "client_credentials"
SessionRequestGrantTypeEnumRefreshToken SessionRequestGrantTypeEnum = "refresh_token"
)


type SessionRequest struct {
    ClientID string `json:"clientId"`
    ClientSecret string `json:"clientSecret"`
    GrantType SessionRequestGrantTypeEnum `json:"grantType"`
    RefreshToken *string `json:"refreshToken,omitempty"`
    
}

