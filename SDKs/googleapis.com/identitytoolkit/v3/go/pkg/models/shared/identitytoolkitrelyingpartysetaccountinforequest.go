package shared



type IdentitytoolkitRelyingpartySetAccountInfoRequest struct {
    CaptchaChallenge *string `json:"captchaChallenge,omitempty"`
    CaptchaResponse *string `json:"captchaResponse,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    CustomAttributes *string `json:"customAttributes,omitempty"`
    DelegatedProjectNumber *string `json:"delegatedProjectNumber,omitempty"`
    DeleteAttribute []string `json:"deleteAttribute,omitempty"`
    DeleteProvider []string `json:"deleteProvider,omitempty"`
    DisableUser *bool `json:"disableUser,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    EmailVerified *bool `json:"emailVerified,omitempty"`
    IDToken *string `json:"idToken,omitempty"`
    InstanceID *string `json:"instanceId,omitempty"`
    LastLoginAt *string `json:"lastLoginAt,omitempty"`
    LocalID *string `json:"localId,omitempty"`
    OobCode *string `json:"oobCode,omitempty"`
    Password *string `json:"password,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    PhotoURL *string `json:"photoUrl,omitempty"`
    Provider []string `json:"provider,omitempty"`
    ReturnSecureToken *bool `json:"returnSecureToken,omitempty"`
    UpgradeToFederatedLogin *bool `json:"upgradeToFederatedLogin,omitempty"`
    ValidSince *string `json:"validSince,omitempty"`
    
}

