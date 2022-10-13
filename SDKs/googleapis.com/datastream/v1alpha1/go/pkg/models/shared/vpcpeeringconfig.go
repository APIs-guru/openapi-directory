package shared

type VpcPeeringConfig struct {
	Subnet  *string `json:"subnet"`
	VpcName *string `json:"vpcName"`
}
