package shared

type CaOptions struct {
	IsCa                *bool  `json:"isCa,omitempty"`
	MaxIssuerPathLength *int32 `json:"maxIssuerPathLength,omitempty"`
}
