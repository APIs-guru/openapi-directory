package shared

type UsersListResponse struct {
	Items         []User  `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}
