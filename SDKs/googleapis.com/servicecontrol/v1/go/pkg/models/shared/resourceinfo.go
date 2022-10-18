package shared

type ResourceInfo struct {
	Permission        *string `json:"permission,omitempty"`
	ResourceContainer *string `json:"resourceContainer,omitempty"`
	ResourceLocation  *string `json:"resourceLocation,omitempty"`
	ResourceName      *string `json:"resourceName,omitempty"`
}
