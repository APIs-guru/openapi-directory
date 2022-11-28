package shared

// SecurityConfig
// Security related configuration, including encryption, Kerberos, etc.
type SecurityConfig struct {
	IdentityConfig *IdentityConfig `json:"identityConfig,omitempty"`
	KerberosConfig *KerberosConfig `json:"kerberosConfig,omitempty"`
}
