package shared

// DeleteContactPhotoResponse
// The response for deleting a contact's photo.
type DeleteContactPhotoResponse struct {
	Person *Person `json:"person,omitempty"`
}
