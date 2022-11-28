package shared

// GetGoogleUpdatedLodgingResponse
// Response message for LodgingService.GetGoogleUpdatedLodging
type GetGoogleUpdatedLodgingResponse struct {
	DiffMask *string  `json:"diffMask,omitempty"`
	Lodging  *Lodging `json:"lodging,omitempty"`
}
