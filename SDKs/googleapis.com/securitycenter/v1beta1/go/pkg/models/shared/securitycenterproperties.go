package shared

type SecurityCenterProperties struct {
	ResourceName    *string  `json:"resourceName"`
	ResourceOwners  []string `json:"resourceOwners"`
	ResourceParent  *string  `json:"resourceParent"`
	ResourceProject *string  `json:"resourceProject"`
	ResourceType    *string  `json:"resourceType"`
}
