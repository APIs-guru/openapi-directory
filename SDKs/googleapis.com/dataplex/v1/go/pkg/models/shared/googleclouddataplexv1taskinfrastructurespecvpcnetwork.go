package shared

type GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork struct {
	Network     *string  `json:"network"`
	NetworkTags []string `json:"networkTags"`
	SubNetwork  *string  `json:"subNetwork"`
}
