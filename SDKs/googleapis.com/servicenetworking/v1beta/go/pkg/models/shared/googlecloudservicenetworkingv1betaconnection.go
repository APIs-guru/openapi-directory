package shared

type GoogleCloudServicenetworkingV1betaConnection struct {
	Network               *string  `json:"network,omitempty"`
	Peering               *string  `json:"peering,omitempty"`
	ReservedPeeringRanges []string `json:"reservedPeeringRanges,omitempty"`
	Service               *string  `json:"service,omitempty"`
}
