package shared

type SecurityConfig struct {
	IdentityConfig *IdentityConfig `json:"identityConfig"`
	KerberosConfig *KerberosConfig `json:"kerberosConfig"`
}
