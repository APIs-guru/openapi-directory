package shared

type ManagementPermissionReference struct {
	Enabled          *bool                  `json:"enabled"`
	Resource         *string                `json:"resource"`
	ScopePermissions map[string]interface{} `json:"scopePermissions"`
}
