package shared

type DiagnosticConfig struct {
	CopyHomeFilesFlagEnabled *bool   `json:"copyHomeFilesFlagEnabled"`
	GcsBucket                *string `json:"gcsBucket"`
	PacketCaptureFlagEnabled *bool   `json:"packetCaptureFlagEnabled"`
	RelativePath             *string `json:"relativePath"`
	RepairFlagEnabled        *bool   `json:"repairFlagEnabled"`
}
