package shared

type ManagementPermissionReference struct {
	Enabled          *bool                  `json:"enabled,omitempty"`
	Resource         *string                `json:"resource,omitempty"`
	ScopePermissions map[string]interface{} `json:"scopePermissions,omitempty"`
}
