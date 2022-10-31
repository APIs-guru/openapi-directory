package shared



type ListUserPermissionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UserPermission []UserPermission `json:"userPermission,omitempty"`
    
}

