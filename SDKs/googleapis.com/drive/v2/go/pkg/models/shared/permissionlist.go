package shared

type PermissionList struct {
	Etag          *string      `json:"etag"`
	Items         []Permission `json:"items"`
	Kind          *string      `json:"kind"`
	NextPageToken *string      `json:"nextPageToken"`
	SelfLink      *string      `json:"selfLink"`
}
