package shared

// VpcPeeringConnectivity
// The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
type VpcPeeringConnectivity struct {
	Vpc *string `json:"vpc,omitempty"`
}
