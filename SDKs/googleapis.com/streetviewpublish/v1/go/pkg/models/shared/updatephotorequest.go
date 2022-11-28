package shared

// UpdatePhotoRequestInput
// Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
type UpdatePhotoRequestInput struct {
	Photo      *PhotoInput `json:"photo,omitempty"`
	UpdateMask *string     `json:"updateMask,omitempty"`
}
