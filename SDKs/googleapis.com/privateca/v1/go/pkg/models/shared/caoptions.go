package shared

// CaOptions
// Describes values that are relevant in a CA certificate.
type CaOptions struct {
	IsCa                *bool  `json:"isCa,omitempty"`
	MaxIssuerPathLength *int32 `json:"maxIssuerPathLength,omitempty"`
}
