package shared

// ReplicatingStep
// ReplicatingStep contains specific step details.
type ReplicatingStep struct {
	LastThirtyMinutesAverageBytesPerSecond *string `json:"lastThirtyMinutesAverageBytesPerSecond,omitempty"`
	LastTwoMinutesAverageBytesPerSecond    *string `json:"lastTwoMinutesAverageBytesPerSecond,omitempty"`
	ReplicatedBytes                        *string `json:"replicatedBytes,omitempty"`
	TotalBytes                             *string `json:"totalBytes,omitempty"`
}
