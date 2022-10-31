package shared



type SecurityConfig struct {
    IdentityConfig *IdentityConfig `json:"identityConfig,omitempty"`
    KerberosConfig *KerberosConfig `json:"kerberosConfig,omitempty"`
    
}

