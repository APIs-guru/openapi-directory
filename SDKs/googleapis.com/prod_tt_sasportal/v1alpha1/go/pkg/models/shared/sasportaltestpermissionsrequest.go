package shared



type SasPortalTestPermissionsRequest struct {
    Permissions []string `json:"permissions,omitempty"`
    Resource *string `json:"resource,omitempty"`
    
}

