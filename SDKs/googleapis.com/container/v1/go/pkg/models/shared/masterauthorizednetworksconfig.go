package shared

type MasterAuthorizedNetworksConfig struct {
	CidrBlocks []CidrBlock `json:"cidrBlocks"`
	Enabled    *bool       `json:"enabled"`
}
