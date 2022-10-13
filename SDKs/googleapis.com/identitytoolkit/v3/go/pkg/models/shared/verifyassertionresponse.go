package shared

type VerifyAssertionResponse struct {
	Action                 *string  `json:"action"`
	AppInstallationURL     *string  `json:"appInstallationUrl"`
	AppScheme              *string  `json:"appScheme"`
	Context                *string  `json:"context"`
	DateOfBirth            *string  `json:"dateOfBirth"`
	DisplayName            *string  `json:"displayName"`
	Email                  *string  `json:"email"`
	EmailRecycled          *bool    `json:"emailRecycled"`
	EmailVerified          *bool    `json:"emailVerified"`
	ErrorMessage           *string  `json:"errorMessage"`
	ExpiresIn              *string  `json:"expiresIn"`
	FederatedID            *string  `json:"federatedId"`
	FirstName              *string  `json:"firstName"`
	FullName               *string  `json:"fullName"`
	IDToken                *string  `json:"idToken"`
	InputEmail             *string  `json:"inputEmail"`
	IsNewUser              *bool    `json:"isNewUser"`
	Kind                   *string  `json:"kind"`
	Language               *string  `json:"language"`
	LastName               *string  `json:"lastName"`
	LocalID                *string  `json:"localId"`
	NeedConfirmation       *bool    `json:"needConfirmation"`
	NeedEmail              *bool    `json:"needEmail"`
	NickName               *string  `json:"nickName"`
	OauthAccessToken       *string  `json:"oauthAccessToken"`
	OauthAuthorizationCode *string  `json:"oauthAuthorizationCode"`
	OauthExpireIn          *int32   `json:"oauthExpireIn"`
	OauthIDToken           *string  `json:"oauthIdToken"`
	OauthRequestToken      *string  `json:"oauthRequestToken"`
	OauthScope             *string  `json:"oauthScope"`
	OauthTokenSecret       *string  `json:"oauthTokenSecret"`
	OriginalEmail          *string  `json:"originalEmail"`
	PhotoURL               *string  `json:"photoUrl"`
	ProviderID             *string  `json:"providerId"`
	RawUserInfo            *string  `json:"rawUserInfo"`
	RefreshToken           *string  `json:"refreshToken"`
	ScreenName             *string  `json:"screenName"`
	TimeZone               *string  `json:"timeZone"`
	VerifiedProvider       []string `json:"verifiedProvider"`
}
