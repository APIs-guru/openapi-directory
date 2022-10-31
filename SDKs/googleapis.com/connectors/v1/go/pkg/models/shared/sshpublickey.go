package shared



type SSHPublicKey struct {
    CertType *string `json:"certType,omitempty"`
    Password *Secret `json:"password,omitempty"`
    SSHClientCert *Secret `json:"sshClientCert,omitempty"`
    SSHClientCertPass *Secret `json:"sshClientCertPass,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

