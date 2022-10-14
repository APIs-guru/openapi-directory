package shared

type TestLdapConnectionRepresentation struct {
	Action            *string `json:"action,omitempty"`
	BindCredential    *string `json:"bindCredential,omitempty"`
	BindDn            *string `json:"bindDn,omitempty"`
	ComponentID       *string `json:"componentId,omitempty"`
	ConnectionTimeout *string `json:"connectionTimeout,omitempty"`
	ConnectionURL     *string `json:"connectionUrl,omitempty"`
	StartTLS          *string `json:"startTls,omitempty"`
	UseTruststoreSpi  *string `json:"useTruststoreSpi,omitempty"`
}
