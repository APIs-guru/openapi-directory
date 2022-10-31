package shared



type QueryGrantableRolesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Roles []Role `json:"roles,omitempty"`
    
}

