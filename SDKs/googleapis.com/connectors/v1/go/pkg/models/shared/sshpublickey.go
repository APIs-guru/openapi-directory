package shared

type SSHPublicKey struct {
	CertType          *string `json:"certType"`
	Password          *Secret `json:"password"`
	SSHClientCert     *Secret `json:"sshClientCert"`
	SSHClientCertPass *Secret `json:"sshClientCertPass"`
	Username          *string `json:"username"`
}
