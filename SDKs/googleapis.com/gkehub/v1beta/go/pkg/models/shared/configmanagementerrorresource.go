package shared

type ConfigManagementErrorResource struct {
	ResourceGvk       *ConfigManagementGroupVersionKind `json:"resourceGvk,omitempty"`
	ResourceName      *string                           `json:"resourceName,omitempty"`
	ResourceNamespace *string                           `json:"resourceNamespace,omitempty"`
	SourcePath        *string                           `json:"sourcePath,omitempty"`
}
