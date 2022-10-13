package shared

type IdentitytoolkitRelyingpartyGetProjectConfigResponse struct {
	AllowPasswordUser           *bool          `json:"allowPasswordUser"`
	APIKey                      *string        `json:"apiKey"`
	AuthorizedDomains           []string       `json:"authorizedDomains"`
	ChangeEmailTemplate         *EmailTemplate `json:"changeEmailTemplate"`
	DynamicLinksDomain          *string        `json:"dynamicLinksDomain"`
	EnableAnonymousUser         *bool          `json:"enableAnonymousUser"`
	IdpConfig                   []IdpConfig    `json:"idpConfig"`
	LegacyResetPasswordTemplate *EmailTemplate `json:"legacyResetPasswordTemplate"`
	ProjectID                   *string        `json:"projectId"`
	ResetPasswordTemplate       *EmailTemplate `json:"resetPasswordTemplate"`
	UseEmailSending             *bool          `json:"useEmailSending"`
	VerifyEmailTemplate         *EmailTemplate `json:"verifyEmailTemplate"`
}
