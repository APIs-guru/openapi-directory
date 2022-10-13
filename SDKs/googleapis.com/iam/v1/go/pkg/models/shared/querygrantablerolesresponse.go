package shared

type QueryGrantableRolesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Roles         []Role  `json:"roles"`
}
