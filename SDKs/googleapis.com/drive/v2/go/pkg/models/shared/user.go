package shared

type UserPicture struct {
	URL *string `json:"url"`
}

type User struct {
	DisplayName         *string      `json:"displayName"`
	EmailAddress        *string      `json:"emailAddress"`
	IsAuthenticatedUser *bool        `json:"isAuthenticatedUser"`
	Kind                *string      `json:"kind"`
	PermissionID        *string      `json:"permissionId"`
	Picture             *UserPicture `json:"picture"`
}
