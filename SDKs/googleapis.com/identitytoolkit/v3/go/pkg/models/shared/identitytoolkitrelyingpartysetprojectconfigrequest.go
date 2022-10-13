package shared

type IdentitytoolkitRelyingpartySetProjectConfigRequest struct {
	AllowPasswordUser           *bool          `json:"allowPasswordUser"`
	APIKey                      *string        `json:"apiKey"`
	AuthorizedDomains           []string       `json:"authorizedDomains"`
	ChangeEmailTemplate         *EmailTemplate `json:"changeEmailTemplate"`
	DelegatedProjectNumber      *string        `json:"delegatedProjectNumber"`
	EnableAnonymousUser         *bool          `json:"enableAnonymousUser"`
	IdpConfig                   []IdpConfig    `json:"idpConfig"`
	LegacyResetPasswordTemplate *EmailTemplate `json:"legacyResetPasswordTemplate"`
	ResetPasswordTemplate       *EmailTemplate `json:"resetPasswordTemplate"`
	UseEmailSending             *bool          `json:"useEmailSending"`
	VerifyEmailTemplate         *EmailTemplate `json:"verifyEmailTemplate"`
}
