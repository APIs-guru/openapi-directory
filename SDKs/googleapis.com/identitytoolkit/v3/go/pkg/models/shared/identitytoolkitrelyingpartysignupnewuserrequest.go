package shared

type IdentitytoolkitRelyingpartySignupNewUserRequest struct {
	CaptchaChallenge    *string `json:"captchaChallenge"`
	CaptchaResponse     *string `json:"captchaResponse"`
	Disabled            *bool   `json:"disabled"`
	DisplayName         *string `json:"displayName"`
	Email               *string `json:"email"`
	EmailVerified       *bool   `json:"emailVerified"`
	IDToken             *string `json:"idToken"`
	InstanceID          *string `json:"instanceId"`
	LocalID             *string `json:"localId"`
	Password            *string `json:"password"`
	PhoneNumber         *string `json:"phoneNumber"`
	PhotoURL            *string `json:"photoUrl"`
	TenantID            *string `json:"tenantId"`
	TenantProjectNumber *string `json:"tenantProjectNumber"`
}
