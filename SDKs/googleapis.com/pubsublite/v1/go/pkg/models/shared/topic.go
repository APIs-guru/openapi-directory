package shared

type Topic struct {
	Name              *string            `json:"name,omitempty"`
	PartitionConfig   *PartitionConfig   `json:"partitionConfig,omitempty"`
	ReservationConfig *ReservationConfig `json:"reservationConfig,omitempty"`
	RetentionConfig   *RetentionConfig   `json:"retentionConfig,omitempty"`
}
