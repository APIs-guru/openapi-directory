package shared



type VpcPeeringConfig struct {
    Subnet *string `json:"subnet,omitempty"`
    Vpc *string `json:"vpc,omitempty"`
    
}

