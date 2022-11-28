package shared

// ResourceLimit
// Contains information about amount of some resource in the cluster. For memory, value should be in GB.
type ResourceLimit struct {
	Maximum      *string `json:"maximum,omitempty"`
	Minimum      *string `json:"minimum,omitempty"`
	ResourceType *string `json:"resourceType,omitempty"`
}
