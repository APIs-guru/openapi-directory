package shared

type ManagedLinodeSettingsSSH struct {
	Access *bool   `json:"access"`
	IP     *string `json:"ip"`
	Port   *int64  `json:"port"`
	User   *string `json:"user"`
}

type ManagedLinodeSettings struct {
	Group *string                   `json:"group"`
	ID    *int64                    `json:"id"`
	Label *string                   `json:"label"`
	SSH   *ManagedLinodeSettingsSSH `json:"ssh"`
}
