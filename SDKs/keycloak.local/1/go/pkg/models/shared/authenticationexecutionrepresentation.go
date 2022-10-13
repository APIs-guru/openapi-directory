package shared

type AuthenticationExecutionRepresentation struct {
	Authenticator       *string `json:"authenticator"`
	AuthenticatorConfig *string `json:"authenticatorConfig"`
	AuthenticatorFlow   *bool   `json:"authenticatorFlow"`
	AutheticatorFlow    *bool   `json:"autheticatorFlow"`
	FlowID              *string `json:"flowId"`
	ID                  *string `json:"id"`
	ParentFlow          *string `json:"parentFlow"`
	Priority            *int32  `json:"priority"`
	Requirement         *string `json:"requirement"`
}
