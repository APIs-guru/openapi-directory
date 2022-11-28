package shared

// Topic
// Metadata about a topic resource.
type Topic struct {
	Name              *string            `json:"name,omitempty"`
	PartitionConfig   *PartitionConfig   `json:"partitionConfig,omitempty"`
	ReservationConfig *ReservationConfig `json:"reservationConfig,omitempty"`
	RetentionConfig   *RetentionConfig   `json:"retentionConfig,omitempty"`
}
