package shared

// SSHPublicKey
// Parameters to support Ssh public key Authentication.
type SSHPublicKey struct {
	CertType          *string `json:"certType,omitempty"`
	SSHClientCert     *Secret `json:"sshClientCert,omitempty"`
	SSHClientCertPass *Secret `json:"sshClientCertPass,omitempty"`
	Username          *string `json:"username,omitempty"`
}
