package shared

type GoogleCloudServicenetworkingV1betaConnection struct {
	Network               *string  `json:"network"`
	Peering               *string  `json:"peering"`
	ReservedPeeringRanges []string `json:"reservedPeeringRanges"`
	Service               *string  `json:"service"`
}
