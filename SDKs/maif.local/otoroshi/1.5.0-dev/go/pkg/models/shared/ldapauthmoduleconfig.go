package shared

type LdapAuthModuleConfig struct {
	AdminPassword     string  `json:"adminPassword"`
	AdminUsername     string  `json:"adminUsername"`
	Desc              string  `json:"desc"`
	EmailField        string  `json:"emailField"`
	GroupFilter       string  `json:"groupFilter"`
	ID                string  `json:"id"`
	Name              string  `json:"name"`
	NameField         string  `json:"nameField"`
	OtoroshiDataField *string `json:"otoroshiDataField,omitempty"`
	SearchBase        string  `json:"searchBase"`
	SearchFilter      string  `json:"searchFilter"`
	ServerURL         string  `json:"serverUrl"`
	SessionMaxAge     int32   `json:"sessionMaxAge"`
	Type              string  `json:"type"`
	UserBase          string  `json:"userBase"`
}
