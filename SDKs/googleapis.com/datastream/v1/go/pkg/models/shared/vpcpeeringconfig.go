package shared

// VpcPeeringConfig
// The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
type VpcPeeringConfig struct {
	Subnet *string `json:"subnet,omitempty"`
	Vpc    *string `json:"vpc,omitempty"`
}
