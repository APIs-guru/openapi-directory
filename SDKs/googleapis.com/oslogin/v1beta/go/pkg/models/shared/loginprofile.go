package shared

type LoginProfile struct {
	Name          *string                 `json:"name"`
	PosixAccounts []PosixAccount          `json:"posixAccounts"`
	SecurityKeys  []SecurityKey           `json:"securityKeys"`
	SSHPublicKeys map[string]SSHPublicKey `json:"sshPublicKeys"`
}
