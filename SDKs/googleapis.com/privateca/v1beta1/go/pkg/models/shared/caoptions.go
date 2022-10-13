package shared

type CaOptions struct {
	IsCa                *bool  `json:"isCa"`
	MaxIssuerPathLength *int32 `json:"maxIssuerPathLength"`
}
