package shared

type SecurityCenterProperties struct {
	ResourceName    *string  `json:"resourceName,omitempty"`
	ResourceOwners  []string `json:"resourceOwners,omitempty"`
	ResourceParent  *string  `json:"resourceParent,omitempty"`
	ResourceProject *string  `json:"resourceProject,omitempty"`
	ResourceType    *string  `json:"resourceType,omitempty"`
}
