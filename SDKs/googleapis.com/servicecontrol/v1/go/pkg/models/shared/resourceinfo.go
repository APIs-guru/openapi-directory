package shared

type ResourceInfo struct {
	ResourceContainer *string `json:"resourceContainer"`
	ResourceLocation  *string `json:"resourceLocation"`
	ResourceName      *string `json:"resourceName"`
}
