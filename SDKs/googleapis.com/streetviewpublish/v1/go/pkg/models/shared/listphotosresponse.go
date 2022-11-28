package shared

// ListPhotosResponse
// Response to list all photos that belong to a user.
type ListPhotosResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Photos        []Photo `json:"photos,omitempty"`
}
