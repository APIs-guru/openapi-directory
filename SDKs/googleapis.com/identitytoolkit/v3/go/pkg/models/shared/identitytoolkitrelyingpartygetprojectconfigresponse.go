package shared

type IdentitytoolkitRelyingpartyGetProjectConfigResponse struct {
	AllowPasswordUser           *bool          `json:"allowPasswordUser,omitempty"`
	APIKey                      *string        `json:"apiKey,omitempty"`
	AuthorizedDomains           []string       `json:"authorizedDomains,omitempty"`
	ChangeEmailTemplate         *EmailTemplate `json:"changeEmailTemplate,omitempty"`
	DynamicLinksDomain          *string        `json:"dynamicLinksDomain,omitempty"`
	EnableAnonymousUser         *bool          `json:"enableAnonymousUser,omitempty"`
	IdpConfig                   []IdpConfig    `json:"idpConfig,omitempty"`
	LegacyResetPasswordTemplate *EmailTemplate `json:"legacyResetPasswordTemplate,omitempty"`
	ProjectID                   *string        `json:"projectId,omitempty"`
	ResetPasswordTemplate       *EmailTemplate `json:"resetPasswordTemplate,omitempty"`
	UseEmailSending             *bool          `json:"useEmailSending,omitempty"`
	VerifyEmailTemplate         *EmailTemplate `json:"verifyEmailTemplate,omitempty"`
}
