package shared

type PartitionConfig struct {
	Capacity *Capacity `json:"capacity,omitempty"`
	Count    *string   `json:"count,omitempty"`
	Scale    *int32    `json:"scale,omitempty"`
}
