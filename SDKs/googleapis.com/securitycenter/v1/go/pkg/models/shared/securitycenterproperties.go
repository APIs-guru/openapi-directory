package shared

// SecurityCenterProperties
// Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
type SecurityCenterProperties struct {
	Folders                    []Folder `json:"folders,omitempty"`
	ResourceDisplayName        *string  `json:"resourceDisplayName,omitempty"`
	ResourceName               *string  `json:"resourceName,omitempty"`
	ResourceOwners             []string `json:"resourceOwners,omitempty"`
	ResourceParent             *string  `json:"resourceParent,omitempty"`
	ResourceParentDisplayName  *string  `json:"resourceParentDisplayName,omitempty"`
	ResourceProject            *string  `json:"resourceProject,omitempty"`
	ResourceProjectDisplayName *string  `json:"resourceProjectDisplayName,omitempty"`
	ResourceType               *string  `json:"resourceType,omitempty"`
}
