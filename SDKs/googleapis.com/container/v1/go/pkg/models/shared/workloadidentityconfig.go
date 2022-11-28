package shared

// WorkloadIdentityConfig
// Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
type WorkloadIdentityConfig struct {
	WorkloadPool *string `json:"workloadPool,omitempty"`
}
