package shared

type ReplicatingStep struct {
	LastThirtyMinutesAverageBytesPerSecond *string `json:"lastThirtyMinutesAverageBytesPerSecond"`
	LastTwoMinutesAverageBytesPerSecond    *string `json:"lastTwoMinutesAverageBytesPerSecond"`
	ReplicatedBytes                        *string `json:"replicatedBytes"`
	TotalBytes                             *string `json:"totalBytes"`
}
