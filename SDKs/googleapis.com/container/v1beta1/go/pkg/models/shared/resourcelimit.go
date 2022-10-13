package shared

type ResourceLimit struct {
	Maximum      *string `json:"maximum"`
	Minimum      *string `json:"minimum"`
	ResourceType *string `json:"resourceType"`
}
