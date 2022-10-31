package shared



type PermissionList struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Permissions []Permission `json:"permissions,omitempty"`
    
}

