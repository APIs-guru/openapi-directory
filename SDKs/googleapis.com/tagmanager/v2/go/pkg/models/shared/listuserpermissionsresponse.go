package shared

type ListUserPermissionsResponse struct {
	NextPageToken  *string          `json:"nextPageToken"`
	UserPermission []UserPermission `json:"userPermission"`
}
