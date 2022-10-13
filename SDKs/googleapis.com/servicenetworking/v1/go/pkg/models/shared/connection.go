package shared

type Connection struct {
	Network               *string  `json:"network"`
	Peering               *string  `json:"peering"`
	ReservedPeeringRanges []string `json:"reservedPeeringRanges"`
	Service               *string  `json:"service"`
}
