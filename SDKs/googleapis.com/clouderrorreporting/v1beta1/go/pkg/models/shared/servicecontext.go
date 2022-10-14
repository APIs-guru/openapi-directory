package shared

type ServiceContext struct {
	ResourceType *string `json:"resourceType,omitempty"`
	Service      *string `json:"service,omitempty"`
	Version      *string `json:"version,omitempty"`
}
