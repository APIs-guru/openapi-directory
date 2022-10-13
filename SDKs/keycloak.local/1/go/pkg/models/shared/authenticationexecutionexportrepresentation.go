package shared

type AuthenticationExecutionExportRepresentation struct {
	Authenticator       *string `json:"authenticator"`
	AuthenticatorConfig *string `json:"authenticatorConfig"`
	AuthenticatorFlow   *bool   `json:"authenticatorFlow"`
	AutheticatorFlow    *bool   `json:"autheticatorFlow"`
	FlowAlias           *string `json:"flowAlias"`
	Priority            *int32  `json:"priority"`
	Requirement         *string `json:"requirement"`
	UserSetupAllowed    *bool   `json:"userSetupAllowed"`
}
