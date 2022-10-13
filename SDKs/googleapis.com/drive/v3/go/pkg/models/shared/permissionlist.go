package shared

type PermissionList struct {
	Kind          *string      `json:"kind"`
	NextPageToken *string      `json:"nextPageToken"`
	Permissions   []Permission `json:"permissions"`
}
