package shared



type CertificateOrKeyGetSchema struct {
    Alg *string `json:"alg,omitempty"`
    E *string `json:"e,omitempty"`
    Kid *string `json:"kid,omitempty"`
    Kty *string `json:"kty,omitempty"`
    N *string `json:"n,omitempty"`
    Use *string `json:"use,omitempty"`
    X5c []string `json:"x5c,omitempty"`
    X5t *string `json:"x5t,omitempty"`
    X5tNumberS256 *string `json:"x5t#S256,omitempty"`
    
}

