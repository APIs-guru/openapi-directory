package shared

type IdentitytoolkitRelyingpartySetAccountInfoRequest struct {
	CaptchaChallenge        *string  `json:"captchaChallenge"`
	CaptchaResponse         *string  `json:"captchaResponse"`
	CreatedAt               *string  `json:"createdAt"`
	CustomAttributes        *string  `json:"customAttributes"`
	DelegatedProjectNumber  *string  `json:"delegatedProjectNumber"`
	DeleteAttribute         []string `json:"deleteAttribute"`
	DeleteProvider          []string `json:"deleteProvider"`
	DisableUser             *bool    `json:"disableUser"`
	DisplayName             *string  `json:"displayName"`
	Email                   *string  `json:"email"`
	EmailVerified           *bool    `json:"emailVerified"`
	IDToken                 *string  `json:"idToken"`
	InstanceID              *string  `json:"instanceId"`
	LastLoginAt             *string  `json:"lastLoginAt"`
	LocalID                 *string  `json:"localId"`
	OobCode                 *string  `json:"oobCode"`
	Password                *string  `json:"password"`
	PhoneNumber             *string  `json:"phoneNumber"`
	PhotoURL                *string  `json:"photoUrl"`
	Provider                []string `json:"provider"`
	ReturnSecureToken       *bool    `json:"returnSecureToken"`
	UpgradeToFederatedLogin *bool    `json:"upgradeToFederatedLogin"`
	ValidSince              *string  `json:"validSince"`
}
