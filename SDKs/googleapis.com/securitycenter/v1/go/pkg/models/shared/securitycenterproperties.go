package shared

type SecurityCenterProperties struct {
	Folders                    []Folder `json:"folders"`
	ResourceDisplayName        *string  `json:"resourceDisplayName"`
	ResourceName               *string  `json:"resourceName"`
	ResourceOwners             []string `json:"resourceOwners"`
	ResourceParent             *string  `json:"resourceParent"`
	ResourceParentDisplayName  *string  `json:"resourceParentDisplayName"`
	ResourceProject            *string  `json:"resourceProject"`
	ResourceProjectDisplayName *string  `json:"resourceProjectDisplayName"`
	ResourceType               *string  `json:"resourceType"`
}
