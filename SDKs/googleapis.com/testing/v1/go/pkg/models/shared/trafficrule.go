package shared

type TrafficRule struct {
	Bandwidth              *float32 `json:"bandwidth"`
	Burst                  *float32 `json:"burst"`
	Delay                  *string  `json:"delay"`
	PacketDuplicationRatio *float32 `json:"packetDuplicationRatio"`
	PacketLossRatio        *float32 `json:"packetLossRatio"`
}
