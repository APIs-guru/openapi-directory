package shared

// ConfigManagementErrorResource
// Model for a config file in the git repo with an associated Sync error
type ConfigManagementErrorResource struct {
	ResourceGvk       *ConfigManagementGroupVersionKind `json:"resourceGvk,omitempty"`
	ResourceName      *string                           `json:"resourceName,omitempty"`
	ResourceNamespace *string                           `json:"resourceNamespace,omitempty"`
	SourcePath        *string                           `json:"sourcePath,omitempty"`
}
