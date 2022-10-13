package shared

type ListRolesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Roles         []Role  `json:"roles"`
}
