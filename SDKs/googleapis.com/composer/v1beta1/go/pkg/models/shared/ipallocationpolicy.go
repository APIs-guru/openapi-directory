package shared



type IPAllocationPolicy struct {
    ClusterIpv4CidrBlock *string `json:"clusterIpv4CidrBlock,omitempty"`
    ClusterSecondaryRangeName *string `json:"clusterSecondaryRangeName,omitempty"`
    ServicesIpv4CidrBlock *string `json:"servicesIpv4CidrBlock,omitempty"`
    ServicesSecondaryRangeName *string `json:"servicesSecondaryRangeName,omitempty"`
    UseIPAliases *bool `json:"useIpAliases,omitempty"`
    
}

