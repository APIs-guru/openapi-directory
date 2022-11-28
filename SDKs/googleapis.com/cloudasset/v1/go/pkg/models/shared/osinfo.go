package shared

// OsInfo
// Operating system information for the VM.
type OsInfo struct {
	Architecture         *string `json:"architecture,omitempty"`
	Hostname             *string `json:"hostname,omitempty"`
	KernelRelease        *string `json:"kernelRelease,omitempty"`
	KernelVersion        *string `json:"kernelVersion,omitempty"`
	LongName             *string `json:"longName,omitempty"`
	OsconfigAgentVersion *string `json:"osconfigAgentVersion,omitempty"`
	ShortName            *string `json:"shortName,omitempty"`
	Version              *string `json:"version,omitempty"`
}
