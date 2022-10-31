package shared



type IdentitytoolkitRelyingpartyVerifyPasswordRequest struct {
    CaptchaChallenge *string `json:"captchaChallenge,omitempty"`
    CaptchaResponse *string `json:"captchaResponse,omitempty"`
    DelegatedProjectNumber *string `json:"delegatedProjectNumber,omitempty"`
    Email *string `json:"email,omitempty"`
    IDToken *string `json:"idToken,omitempty"`
    InstanceID *string `json:"instanceId,omitempty"`
    Password *string `json:"password,omitempty"`
    PendingIDToken *string `json:"pendingIdToken,omitempty"`
    ReturnSecureToken *bool `json:"returnSecureToken,omitempty"`
    TenantID *string `json:"tenantId,omitempty"`
    TenantProjectNumber *string `json:"tenantProjectNumber,omitempty"`
    
}

