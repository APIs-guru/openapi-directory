package shared

type WorkloadIdentityConfig struct {
	IdentityNamespace *string `json:"identityNamespace,omitempty"`
	IdentityProvider  *string `json:"identityProvider,omitempty"`
	WorkloadPool      *string `json:"workloadPool,omitempty"`
}
