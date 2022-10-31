package shared



type PartitionResponse struct {
    Partitions []Partition `json:"partitions,omitempty"`
    Transaction *Transaction `json:"transaction,omitempty"`
    
}

