package shared

type UserPicture struct {
	URL *string `json:"url,omitempty"`
}

type User struct {
	DisplayName         *string      `json:"displayName,omitempty"`
	EmailAddress        *string      `json:"emailAddress,omitempty"`
	IsAuthenticatedUser *bool        `json:"isAuthenticatedUser,omitempty"`
	Kind                *string      `json:"kind,omitempty"`
	PermissionID        *string      `json:"permissionId,omitempty"`
	Picture             *UserPicture `json:"picture,omitempty"`
}
