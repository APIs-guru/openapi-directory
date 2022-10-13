package shared

type InventoryOsInfo struct {
	Architecture         *string `json:"architecture"`
	Hostname             *string `json:"hostname"`
	KernelRelease        *string `json:"kernelRelease"`
	KernelVersion        *string `json:"kernelVersion"`
	LongName             *string `json:"longName"`
	OsconfigAgentVersion *string `json:"osconfigAgentVersion"`
	ShortName            *string `json:"shortName"`
	Version              *string `json:"version"`
}
