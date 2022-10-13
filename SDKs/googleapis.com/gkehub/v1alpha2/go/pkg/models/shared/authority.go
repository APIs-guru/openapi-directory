package shared

type Authority struct {
	IdentityProvider     *string `json:"identityProvider"`
	Issuer               *string `json:"issuer"`
	OidcJwks             *string `json:"oidcJwks"`
	WorkloadIdentityPool *string `json:"workloadIdentityPool"`
}
