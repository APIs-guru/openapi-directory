package shared

// LoginProfile
// The user profile information used for logging in to a virtual machine on Google Compute Engine.
type LoginProfile struct {
	Name          *string                 `json:"name,omitempty"`
	PosixAccounts []PosixAccount          `json:"posixAccounts,omitempty"`
	SSHPublicKeys map[string]SSHPublicKey `json:"sshPublicKeys,omitempty"`
}
