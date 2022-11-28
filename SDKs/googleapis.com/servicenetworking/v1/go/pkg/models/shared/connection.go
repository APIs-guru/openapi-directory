package shared

// Connection
// Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.
type Connection struct {
	Network               *string  `json:"network,omitempty"`
	Peering               *string  `json:"peering,omitempty"`
	ReservedPeeringRanges []string `json:"reservedPeeringRanges,omitempty"`
	Service               *string  `json:"service,omitempty"`
}

// ConnectionInput
// Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.
type ConnectionInput struct {
	Network               *string  `json:"network,omitempty"`
	ReservedPeeringRanges []string `json:"reservedPeeringRanges,omitempty"`
}
