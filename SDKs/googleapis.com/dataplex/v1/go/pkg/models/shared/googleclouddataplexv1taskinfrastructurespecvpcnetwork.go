package shared

// GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork
// Cloud VPC Network used to run the infrastructure.
type GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork struct {
	Network     *string  `json:"network,omitempty"`
	NetworkTags []string `json:"networkTags,omitempty"`
	SubNetwork  *string  `json:"subNetwork,omitempty"`
}
