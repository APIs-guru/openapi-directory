package shared

type PermissionList struct {
	Etag          *string      `json:"etag,omitempty"`
	Items         []Permission `json:"items,omitempty"`
	Kind          *string      `json:"kind,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	SelfLink      *string      `json:"selfLink,omitempty"`
}
