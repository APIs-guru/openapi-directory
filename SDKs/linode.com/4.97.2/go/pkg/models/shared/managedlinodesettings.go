package shared

// ManagedLinodeSettingsSSH
// The SSH settings for this Linode.
type ManagedLinodeSettingsSSH struct {
	Access *bool   `json:"access,omitempty"`
	IP     *string `json:"ip,omitempty"`
	Port   *int64  `json:"port,omitempty"`
	User   *string `json:"user,omitempty"`
}

// ManagedLinodeSettings
// Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
type ManagedLinodeSettings struct {
	Group *string                   `json:"group,omitempty"`
	ID    *int64                    `json:"id,omitempty"`
	Label *string                   `json:"label,omitempty"`
	SSH   *ManagedLinodeSettingsSSH `json:"ssh,omitempty"`
}

// ManagedLinodeSettingsInput
// Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
type ManagedLinodeSettingsInput struct {
	SSH *ManagedLinodeSettingsSSH `json:"ssh,omitempty"`
}
