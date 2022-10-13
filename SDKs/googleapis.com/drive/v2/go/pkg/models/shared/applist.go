package shared

type AppList struct {
	DefaultAppIds []string `json:"defaultAppIds"`
	Etag          *string  `json:"etag"`
	Items         []App    `json:"items"`
	Kind          *string  `json:"kind"`
	SelfLink      *string  `json:"selfLink"`
}
