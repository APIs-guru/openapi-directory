package shared

// BatchDeletePhotosResponse
// Response to batch delete of one or more Photos.
type BatchDeletePhotosResponse struct {
	Status []Status `json:"status,omitempty"`
}
