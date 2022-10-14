package shared

type ListRolesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Roles         []Role  `json:"roles,omitempty"`
}
