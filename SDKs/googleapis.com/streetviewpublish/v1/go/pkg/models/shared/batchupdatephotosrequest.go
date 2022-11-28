package shared

// BatchUpdatePhotosRequestInput
// Request to update the metadata of photos. Updating the pixels of photos is not supported.
type BatchUpdatePhotosRequestInput struct {
	UpdatePhotoRequests []UpdatePhotoRequestInput `json:"updatePhotoRequests,omitempty"`
}
