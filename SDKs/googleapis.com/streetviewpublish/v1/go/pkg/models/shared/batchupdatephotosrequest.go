package shared

type BatchUpdatePhotosRequest struct {
	UpdatePhotoRequests []UpdatePhotoRequest `json:"updatePhotoRequests,omitempty"`
}
