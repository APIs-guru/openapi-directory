package shared



type AuthenticationExecutionRepresentation struct {
    Authenticator *string `json:"authenticator,omitempty"`
    AuthenticatorConfig *string `json:"authenticatorConfig,omitempty"`
    AuthenticatorFlow *bool `json:"authenticatorFlow,omitempty"`
    AutheticatorFlow *bool `json:"autheticatorFlow,omitempty"`
    FlowID *string `json:"flowId,omitempty"`
    ID *string `json:"id,omitempty"`
    ParentFlow *string `json:"parentFlow,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    Requirement *string `json:"requirement,omitempty"`
    
}

