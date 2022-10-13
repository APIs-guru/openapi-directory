package shared

type ListDatabaseRolesResponse struct {
	DatabaseRoles []DatabaseRole `json:"databaseRoles"`
	NextPageToken *string        `json:"nextPageToken"`
}
