package shared

type InjectCredentialsRequest struct {
	ClusterUUID           *string `json:"clusterUuid"`
	CredentialsCiphertext *string `json:"credentialsCiphertext"`
}
