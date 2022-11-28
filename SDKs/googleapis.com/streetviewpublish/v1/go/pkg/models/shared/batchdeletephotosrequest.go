package shared

// BatchDeletePhotosRequest
// Request to delete multiple Photos.
type BatchDeletePhotosRequest struct {
	PhotoIds []string `json:"photoIds,omitempty"`
}
