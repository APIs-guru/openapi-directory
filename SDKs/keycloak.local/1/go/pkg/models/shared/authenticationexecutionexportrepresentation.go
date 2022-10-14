package shared

type AuthenticationExecutionExportRepresentation struct {
	Authenticator       *string `json:"authenticator,omitempty"`
	AuthenticatorConfig *string `json:"authenticatorConfig,omitempty"`
	AuthenticatorFlow   *bool   `json:"authenticatorFlow,omitempty"`
	AutheticatorFlow    *bool   `json:"autheticatorFlow,omitempty"`
	FlowAlias           *string `json:"flowAlias,omitempty"`
	Priority            *int32  `json:"priority,omitempty"`
	Requirement         *string `json:"requirement,omitempty"`
	UserSetupAllowed    *bool   `json:"userSetupAllowed,omitempty"`
}
