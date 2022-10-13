package shared

type Actor struct {
	Administrator map[string]interface{} `json:"administrator"`
	Anonymous     map[string]interface{} `json:"anonymous"`
	Impersonation *Impersonation         `json:"impersonation"`
	System        *SystemEvent           `json:"system"`
	User          *User                  `json:"user"`
}
