package shared

// IdentitytoolkitRelyingpartySignupNewUserRequest
// Request to signup new user, create anonymous user or anonymous user reauth.
type IdentitytoolkitRelyingpartySignupNewUserRequest struct {
	CaptchaChallenge    *string `json:"captchaChallenge,omitempty"`
	CaptchaResponse     *string `json:"captchaResponse,omitempty"`
	Disabled            *bool   `json:"disabled,omitempty"`
	DisplayName         *string `json:"displayName,omitempty"`
	Email               *string `json:"email,omitempty"`
	EmailVerified       *bool   `json:"emailVerified,omitempty"`
	IDToken             *string `json:"idToken,omitempty"`
	InstanceID          *string `json:"instanceId,omitempty"`
	LocalID             *string `json:"localId,omitempty"`
	Password            *string `json:"password,omitempty"`
	PhoneNumber         *string `json:"phoneNumber,omitempty"`
	PhotoURL            *string `json:"photoUrl,omitempty"`
	TenantID            *string `json:"tenantId,omitempty"`
	TenantProjectNumber *string `json:"tenantProjectNumber,omitempty"`
}
