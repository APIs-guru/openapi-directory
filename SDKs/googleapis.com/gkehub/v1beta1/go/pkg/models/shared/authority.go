package shared

// Authority
// Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
type Authority struct {
	IdentityProvider     *string `json:"identityProvider,omitempty"`
	Issuer               *string `json:"issuer,omitempty"`
	OidcJwks             *string `json:"oidcJwks,omitempty"`
	WorkloadIdentityPool *string `json:"workloadIdentityPool,omitempty"`
}

// AuthorityInput
// Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
type AuthorityInput struct {
	Issuer   *string `json:"issuer,omitempty"`
	OidcJwks *string `json:"oidcJwks,omitempty"`
}
