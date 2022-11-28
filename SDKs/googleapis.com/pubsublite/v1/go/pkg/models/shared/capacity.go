package shared

// Capacity
// The throughput capacity configuration for each partition.
type Capacity struct {
	PublishMibPerSec   *int32 `json:"publishMibPerSec,omitempty"`
	SubscribeMibPerSec *int32 `json:"subscribeMibPerSec,omitempty"`
}
