package shared

type GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork struct {
	Network     *string  `json:"network,omitempty"`
	NetworkTags []string `json:"networkTags,omitempty"`
	SubNetwork  *string  `json:"subNetwork,omitempty"`
}
