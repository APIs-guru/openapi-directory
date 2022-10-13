package shared

type PartitionResponse struct {
	Partitions  []Partition  `json:"partitions"`
	Transaction *Transaction `json:"transaction"`
}
