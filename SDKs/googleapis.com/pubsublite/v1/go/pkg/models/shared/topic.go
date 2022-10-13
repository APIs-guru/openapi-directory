package shared

type Topic struct {
	Name              *string            `json:"name"`
	PartitionConfig   *PartitionConfig   `json:"partitionConfig"`
	ReservationConfig *ReservationConfig `json:"reservationConfig"`
	RetentionConfig   *RetentionConfig   `json:"retentionConfig"`
}
