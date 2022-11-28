package shared

// BatchGetPhotosResponse
// Response to batch get of Photos.
type BatchGetPhotosResponse struct {
	Results []PhotoResponse `json:"results,omitempty"`
}
