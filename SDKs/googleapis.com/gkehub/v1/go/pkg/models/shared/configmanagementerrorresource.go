package shared

type ConfigManagementErrorResource struct {
	ResourceGvk       *ConfigManagementGroupVersionKind `json:"resourceGvk"`
	ResourceName      *string                           `json:"resourceName"`
	ResourceNamespace *string                           `json:"resourceNamespace"`
	SourcePath        *string                           `json:"sourcePath"`
}
