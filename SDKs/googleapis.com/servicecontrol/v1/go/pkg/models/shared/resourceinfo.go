package shared

type ResourceInfo struct {
	ResourceContainer *string `json:"resourceContainer,omitempty"`
	ResourceLocation  *string `json:"resourceLocation,omitempty"`
	ResourceName      *string `json:"resourceName,omitempty"`
}
