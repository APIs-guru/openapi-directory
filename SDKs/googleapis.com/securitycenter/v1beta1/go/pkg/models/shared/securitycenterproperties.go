package shared

// SecurityCenterProperties
// Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
type SecurityCenterProperties struct {
	ResourceName    *string  `json:"resourceName,omitempty"`
	ResourceOwners  []string `json:"resourceOwners,omitempty"`
	ResourceParent  *string  `json:"resourceParent,omitempty"`
	ResourceProject *string  `json:"resourceProject,omitempty"`
	ResourceType    *string  `json:"resourceType,omitempty"`
}
