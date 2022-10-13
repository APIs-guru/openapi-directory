package shared

type VpcPeeringConfig struct {
	Subnet *string `json:"subnet"`
	Vpc    *string `json:"vpc"`
}
