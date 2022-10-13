package shared

type ListUsersResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Users         []User  `json:"users"`
}
