package shared

type ResourceLimit struct {
	Maximum      *string `json:"maximum,omitempty"`
	Minimum      *string `json:"minimum,omitempty"`
	ResourceType *string `json:"resourceType,omitempty"`
}
