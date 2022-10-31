package shared

type InjectCredentialsRequest struct {
	ClusterUUID           *string `json:"clusterUuid,omitempty"`
	CredentialsCiphertext *string `json:"credentialsCiphertext,omitempty"`
}
