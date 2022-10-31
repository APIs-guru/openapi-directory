package shared



type GoogleCloudConnectorsV1AuthConfigSSHPublicKey struct {
    CertType *string `json:"certType,omitempty"`
    Password *GoogleCloudConnectorsV1Secret `json:"password,omitempty"`
    SSHClientCert *GoogleCloudConnectorsV1Secret `json:"sshClientCert,omitempty"`
    SSHClientCertPass *GoogleCloudConnectorsV1Secret `json:"sshClientCertPass,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

