package shared



type DiagnosticConfig struct {
    CopyHomeFilesFlagEnabled *bool `json:"copyHomeFilesFlagEnabled,omitempty"`
    GcsBucket *string `json:"gcsBucket,omitempty"`
    PacketCaptureFlagEnabled *bool `json:"packetCaptureFlagEnabled,omitempty"`
    RelativePath *string `json:"relativePath,omitempty"`
    RepairFlagEnabled *bool `json:"repairFlagEnabled,omitempty"`
    
}

