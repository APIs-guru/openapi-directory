package shared

// InjectCredentialsRequest
// A request to inject credentials into a cluster.
type InjectCredentialsRequest struct {
	ClusterUUID           *string `json:"clusterUuid,omitempty"`
	CredentialsCiphertext *string `json:"credentialsCiphertext,omitempty"`
}
