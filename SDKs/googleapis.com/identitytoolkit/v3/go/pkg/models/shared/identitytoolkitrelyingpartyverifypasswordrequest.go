package shared

type IdentitytoolkitRelyingpartyVerifyPasswordRequest struct {
	CaptchaChallenge       *string `json:"captchaChallenge"`
	CaptchaResponse        *string `json:"captchaResponse"`
	DelegatedProjectNumber *string `json:"delegatedProjectNumber"`
	Email                  *string `json:"email"`
	IDToken                *string `json:"idToken"`
	InstanceID             *string `json:"instanceId"`
	Password               *string `json:"password"`
	PendingIDToken         *string `json:"pendingIdToken"`
	ReturnSecureToken      *bool   `json:"returnSecureToken"`
	TenantID               *string `json:"tenantId"`
	TenantProjectNumber    *string `json:"tenantProjectNumber"`
}
