package shared



type MasterAuthorizedNetworksConfig struct {
    CidrBlocks []CidrBlock `json:"cidrBlocks,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    
}

