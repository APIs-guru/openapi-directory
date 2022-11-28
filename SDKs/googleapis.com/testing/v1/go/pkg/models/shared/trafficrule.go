package shared

// TrafficRule
// Network emulation parameters.
type TrafficRule struct {
	Bandwidth              *float32 `json:"bandwidth,omitempty"`
	Burst                  *float32 `json:"burst,omitempty"`
	Delay                  *string  `json:"delay,omitempty"`
	PacketDuplicationRatio *float32 `json:"packetDuplicationRatio,omitempty"`
	PacketLossRatio        *float32 `json:"packetLossRatio,omitempty"`
}
