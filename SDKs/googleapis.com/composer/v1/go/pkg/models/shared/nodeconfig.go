package shared

type NodeConfig struct {
	DiskSizeGb         *int32              `json:"diskSizeGb"`
	EnableIPMasqAgent  *bool               `json:"enableIpMasqAgent"`
	IPAllocationPolicy *IPAllocationPolicy `json:"ipAllocationPolicy"`
	Location           *string             `json:"location"`
	MachineType        *string             `json:"machineType"`
	Network            *string             `json:"network"`
	OauthScopes        []string            `json:"oauthScopes"`
	ServiceAccount     *string             `json:"serviceAccount"`
	Subnetwork         *string             `json:"subnetwork"`
	Tags               []string            `json:"tags"`
}
