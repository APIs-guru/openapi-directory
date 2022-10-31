package shared

type VerifyPasswordResponse struct {
	DisplayName            *string `json:"displayName,omitempty"`
	Email                  *string `json:"email,omitempty"`
	ExpiresIn              *string `json:"expiresIn,omitempty"`
	IDToken                *string `json:"idToken,omitempty"`
	Kind                   *string `json:"kind,omitempty"`
	LocalID                *string `json:"localId,omitempty"`
	OauthAccessToken       *string `json:"oauthAccessToken,omitempty"`
	OauthAuthorizationCode *string `json:"oauthAuthorizationCode,omitempty"`
	OauthExpireIn          *int32  `json:"oauthExpireIn,omitempty"`
	PhotoURL               *string `json:"photoUrl,omitempty"`
	RefreshToken           *string `json:"refreshToken,omitempty"`
	Registered             *bool   `json:"registered,omitempty"`
}
