package shared



type IdentitytoolkitRelyingpartySetProjectConfigRequest struct {
    AllowPasswordUser *bool `json:"allowPasswordUser,omitempty"`
    APIKey *string `json:"apiKey,omitempty"`
    AuthorizedDomains []string `json:"authorizedDomains,omitempty"`
    ChangeEmailTemplate *EmailTemplate `json:"changeEmailTemplate,omitempty"`
    DelegatedProjectNumber *string `json:"delegatedProjectNumber,omitempty"`
    EnableAnonymousUser *bool `json:"enableAnonymousUser,omitempty"`
    IdpConfig []IdpConfig `json:"idpConfig,omitempty"`
    LegacyResetPasswordTemplate *EmailTemplate `json:"legacyResetPasswordTemplate,omitempty"`
    ResetPasswordTemplate *EmailTemplate `json:"resetPasswordTemplate,omitempty"`
    UseEmailSending *bool `json:"useEmailSending,omitempty"`
    VerifyEmailTemplate *EmailTemplate `json:"verifyEmailTemplate,omitempty"`
    
}

