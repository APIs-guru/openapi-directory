package shared

// PhotoResponse
// Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
type PhotoResponse struct {
	Photo  *Photo  `json:"photo,omitempty"`
	Status *Status `json:"status,omitempty"`
}
