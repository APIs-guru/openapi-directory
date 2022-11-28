package shared

// WorkloadIdentityConfig
// Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
type WorkloadIdentityConfig struct {
	IdentityNamespace *string `json:"identityNamespace,omitempty"`
	IdentityProvider  *string `json:"identityProvider,omitempty"`
	WorkloadPool      *string `json:"workloadPool,omitempty"`
}
