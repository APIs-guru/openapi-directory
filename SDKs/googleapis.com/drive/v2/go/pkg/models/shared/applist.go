package shared

type AppList struct {
	DefaultAppIds []string `json:"defaultAppIds,omitempty"`
	Etag          *string  `json:"etag,omitempty"`
	Items         []App    `json:"items,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	SelfLink      *string  `json:"selfLink,omitempty"`
}
