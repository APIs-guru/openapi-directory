package shared

// GoogleCloudConnectorsV1AuthConfigSSHPublicKey
// Parameters to support Ssh public key Authentication.
type GoogleCloudConnectorsV1AuthConfigSSHPublicKey struct {
	CertType          *string                        `json:"certType,omitempty"`
	SSHClientCert     *GoogleCloudConnectorsV1Secret `json:"sshClientCert,omitempty"`
	SSHClientCertPass *GoogleCloudConnectorsV1Secret `json:"sshClientCertPass,omitempty"`
	Username          *string                        `json:"username,omitempty"`
}
