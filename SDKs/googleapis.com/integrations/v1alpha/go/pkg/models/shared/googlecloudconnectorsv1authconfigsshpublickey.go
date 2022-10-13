package shared

type GoogleCloudConnectorsV1AuthConfigSSHPublicKey struct {
	CertType          *string                        `json:"certType"`
	Password          *GoogleCloudConnectorsV1Secret `json:"password"`
	SSHClientCert     *GoogleCloudConnectorsV1Secret `json:"sshClientCert"`
	SSHClientCertPass *GoogleCloudConnectorsV1Secret `json:"sshClientCertPass"`
	Username          *string                        `json:"username"`
}
