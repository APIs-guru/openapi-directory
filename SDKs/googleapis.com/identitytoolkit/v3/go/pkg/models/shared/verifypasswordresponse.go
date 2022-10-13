package shared

type VerifyPasswordResponse struct {
	DisplayName            *string `json:"displayName"`
	Email                  *string `json:"email"`
	ExpiresIn              *string `json:"expiresIn"`
	IDToken                *string `json:"idToken"`
	Kind                   *string `json:"kind"`
	LocalID                *string `json:"localId"`
	OauthAccessToken       *string `json:"oauthAccessToken"`
	OauthAuthorizationCode *string `json:"oauthAuthorizationCode"`
	OauthExpireIn          *int32  `json:"oauthExpireIn"`
	PhotoURL               *string `json:"photoUrl"`
	RefreshToken           *string `json:"refreshToken"`
	Registered             *bool   `json:"registered"`
}
