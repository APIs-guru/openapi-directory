package shared

type WorkloadIdentityConfig struct {
	IdentityNamespace *string `json:"identityNamespace"`
	IdentityProvider  *string `json:"identityProvider"`
	WorkloadPool      *string `json:"workloadPool"`
}
