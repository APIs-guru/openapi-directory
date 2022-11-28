package shared

// UsersListResponse
// User list response.
type UsersListResponse struct {
	Items         []User  `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
