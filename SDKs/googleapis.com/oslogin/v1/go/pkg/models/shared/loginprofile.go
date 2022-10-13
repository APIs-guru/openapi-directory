package shared

type LoginProfile struct {
	Name          *string                 `json:"name"`
	PosixAccounts []PosixAccount          `json:"posixAccounts"`
	SSHPublicKeys map[string]SSHPublicKey `json:"sshPublicKeys"`
}
