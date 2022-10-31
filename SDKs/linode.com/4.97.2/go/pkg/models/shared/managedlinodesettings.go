package shared

type ManagedLinodeSettingsSSH struct {
	Access *bool   `json:"access,omitempty"`
	IP     *string `json:"ip,omitempty"`
	Port   *int64  `json:"port,omitempty"`
	User   *string `json:"user,omitempty"`
}

type ManagedLinodeSettings struct {
	Group *string                   `json:"group,omitempty"`
	ID    *int64                    `json:"id,omitempty"`
	Label *string                   `json:"label,omitempty"`
	SSH   *ManagedLinodeSettingsSSH `json:"ssh,omitempty"`
}
