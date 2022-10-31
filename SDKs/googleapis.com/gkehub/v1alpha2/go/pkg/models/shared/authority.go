package shared

type Authority struct {
	IdentityProvider     *string `json:"identityProvider,omitempty"`
	Issuer               *string `json:"issuer,omitempty"`
	OidcJwks             *string `json:"oidcJwks,omitempty"`
	WorkloadIdentityPool *string `json:"workloadIdentityPool,omitempty"`
}
