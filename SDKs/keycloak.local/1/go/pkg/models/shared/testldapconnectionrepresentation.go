package shared

type TestLdapConnectionRepresentation struct {
	Action            *string `json:"action"`
	BindCredential    *string `json:"bindCredential"`
	BindDn            *string `json:"bindDn"`
	ComponentID       *string `json:"componentId"`
	ConnectionTimeout *string `json:"connectionTimeout"`
	ConnectionURL     *string `json:"connectionUrl"`
	StartTLS          *string `json:"startTls"`
	UseTruststoreSpi  *string `json:"useTruststoreSpi"`
}
