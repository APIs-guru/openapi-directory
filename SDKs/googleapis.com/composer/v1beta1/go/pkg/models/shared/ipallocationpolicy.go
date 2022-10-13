package shared

type IPAllocationPolicy struct {
	ClusterIpv4CidrBlock       *string `json:"clusterIpv4CidrBlock"`
	ClusterSecondaryRangeName  *string `json:"clusterSecondaryRangeName"`
	ServicesIpv4CidrBlock      *string `json:"servicesIpv4CidrBlock"`
	ServicesSecondaryRangeName *string `json:"servicesSecondaryRangeName"`
	UseIPAliases               *bool   `json:"useIpAliases"`
}
