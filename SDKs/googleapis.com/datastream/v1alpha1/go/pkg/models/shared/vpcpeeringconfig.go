package shared

type VpcPeeringConfig struct {
	Subnet  *string `json:"subnet,omitempty"`
	VpcName *string `json:"vpcName,omitempty"`
}
