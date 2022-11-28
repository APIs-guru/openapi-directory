package shared

// VerifyAssertionResponse
// Response of verifying the IDP assertion.
type VerifyAssertionResponse struct {
	Action                 *string  `json:"action,omitempty"`
	AppInstallationURL     *string  `json:"appInstallationUrl,omitempty"`
	AppScheme              *string  `json:"appScheme,omitempty"`
	Context                *string  `json:"context,omitempty"`
	DateOfBirth            *string  `json:"dateOfBirth,omitempty"`
	DisplayName            *string  `json:"displayName,omitempty"`
	Email                  *string  `json:"email,omitempty"`
	EmailRecycled          *bool    `json:"emailRecycled,omitempty"`
	EmailVerified          *bool    `json:"emailVerified,omitempty"`
	ErrorMessage           *string  `json:"errorMessage,omitempty"`
	ExpiresIn              *string  `json:"expiresIn,omitempty"`
	FederatedID            *string  `json:"federatedId,omitempty"`
	FirstName              *string  `json:"firstName,omitempty"`
	FullName               *string  `json:"fullName,omitempty"`
	IDToken                *string  `json:"idToken,omitempty"`
	InputEmail             *string  `json:"inputEmail,omitempty"`
	IsNewUser              *bool    `json:"isNewUser,omitempty"`
	Kind                   *string  `json:"kind,omitempty"`
	Language               *string  `json:"language,omitempty"`
	LastName               *string  `json:"lastName,omitempty"`
	LocalID                *string  `json:"localId,omitempty"`
	NeedConfirmation       *bool    `json:"needConfirmation,omitempty"`
	NeedEmail              *bool    `json:"needEmail,omitempty"`
	NickName               *string  `json:"nickName,omitempty"`
	OauthAccessToken       *string  `json:"oauthAccessToken,omitempty"`
	OauthAuthorizationCode *string  `json:"oauthAuthorizationCode,omitempty"`
	OauthExpireIn          *int32   `json:"oauthExpireIn,omitempty"`
	OauthIDToken           *string  `json:"oauthIdToken,omitempty"`
	OauthRequestToken      *string  `json:"oauthRequestToken,omitempty"`
	OauthScope             *string  `json:"oauthScope,omitempty"`
	OauthTokenSecret       *string  `json:"oauthTokenSecret,omitempty"`
	OriginalEmail          *string  `json:"originalEmail,omitempty"`
	PhotoURL               *string  `json:"photoUrl,omitempty"`
	ProviderID             *string  `json:"providerId,omitempty"`
	RawUserInfo            *string  `json:"rawUserInfo,omitempty"`
	RefreshToken           *string  `json:"refreshToken,omitempty"`
	ScreenName             *string  `json:"screenName,omitempty"`
	TimeZone               *string  `json:"timeZone,omitempty"`
	VerifiedProvider       []string `json:"verifiedProvider,omitempty"`
}
