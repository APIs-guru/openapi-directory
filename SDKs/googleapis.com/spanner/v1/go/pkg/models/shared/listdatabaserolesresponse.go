package shared

// ListDatabaseRolesResponse
// The response for ListDatabaseRoles.
type ListDatabaseRolesResponse struct {
	DatabaseRoles []DatabaseRole `json:"databaseRoles,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
