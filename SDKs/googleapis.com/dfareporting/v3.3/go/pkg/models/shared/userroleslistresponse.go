package shared

type UserRolesListResponse struct {
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
	UserRoles     []UserRole `json:"userRoles"`
}
