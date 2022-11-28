package shared

type AccountFeatures struct {
	SupportMultipleContainers *bool `json:"supportMultipleContainers,omitempty"`
	SupportUserPermissions    *bool `json:"supportUserPermissions,omitempty"`
}
