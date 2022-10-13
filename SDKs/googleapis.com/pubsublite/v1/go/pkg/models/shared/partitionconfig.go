package shared

type PartitionConfig struct {
	Capacity *Capacity `json:"capacity"`
	Count    *string   `json:"count"`
	Scale    *int32    `json:"scale"`
}
