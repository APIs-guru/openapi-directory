package shared

// ResourceInfo
// Describes a resource associated with this operation.
type ResourceInfo struct {
	Permission        *string `json:"permission,omitempty"`
	ResourceContainer *string `json:"resourceContainer,omitempty"`
	ResourceLocation  *string `json:"resourceLocation,omitempty"`
	ResourceName      *string `json:"resourceName,omitempty"`
}
