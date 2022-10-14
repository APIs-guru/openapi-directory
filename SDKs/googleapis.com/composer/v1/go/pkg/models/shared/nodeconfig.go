package shared

type NodeConfig struct {
	DiskSizeGb         *int32              `json:"diskSizeGb,omitempty"`
	EnableIPMasqAgent  *bool               `json:"enableIpMasqAgent,omitempty"`
	IPAllocationPolicy *IPAllocationPolicy `json:"ipAllocationPolicy,omitempty"`
	Location           *string             `json:"location,omitempty"`
	MachineType        *string             `json:"machineType,omitempty"`
	Network            *string             `json:"network,omitempty"`
	OauthScopes        []string            `json:"oauthScopes,omitempty"`
	ServiceAccount     *string             `json:"serviceAccount,omitempty"`
	Subnetwork         *string             `json:"subnetwork,omitempty"`
	Tags               []string            `json:"tags,omitempty"`
}
