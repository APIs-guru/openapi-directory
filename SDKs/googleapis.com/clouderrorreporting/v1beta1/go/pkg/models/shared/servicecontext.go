package shared

type ServiceContext struct {
	ResourceType *string `json:"resourceType"`
	Service      *string `json:"service"`
	Version      *string `json:"version"`
}
