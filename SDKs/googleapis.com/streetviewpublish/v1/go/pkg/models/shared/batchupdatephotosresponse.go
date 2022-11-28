package shared

// BatchUpdatePhotosResponse
// Response to batch update of metadata of one or more Photos.
type BatchUpdatePhotosResponse struct {
	Results []PhotoResponse `json:"results,omitempty"`
}
