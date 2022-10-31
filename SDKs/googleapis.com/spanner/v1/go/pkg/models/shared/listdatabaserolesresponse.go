package shared



type ListDatabaseRolesResponse struct {
    DatabaseRoles []DatabaseRole `json:"databaseRoles,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

