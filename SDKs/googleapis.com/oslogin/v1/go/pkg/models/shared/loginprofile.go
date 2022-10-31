package shared



type LoginProfile struct {
    Name *string `json:"name,omitempty"`
    PosixAccounts []PosixAccount `json:"posixAccounts,omitempty"`
    SSHPublicKeys map[string]SSHPublicKey `json:"sshPublicKeys,omitempty"`
    
}

