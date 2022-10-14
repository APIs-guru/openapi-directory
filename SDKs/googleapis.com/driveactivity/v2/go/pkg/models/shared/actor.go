package shared

type Actor struct {
	Administrator map[string]interface{} `json:"administrator,omitempty"`
	Anonymous     map[string]interface{} `json:"anonymous,omitempty"`
	Impersonation *Impersonation         `json:"impersonation,omitempty"`
	System        *SystemEvent           `json:"system,omitempty"`
	User          *User                  `json:"user,omitempty"`
}
