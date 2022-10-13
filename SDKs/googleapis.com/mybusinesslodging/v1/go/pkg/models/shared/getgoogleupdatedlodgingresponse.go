package shared

type GetGoogleUpdatedLodgingResponse struct {
	DiffMask *string  `json:"diffMask"`
	Lodging  *Lodging `json:"lodging"`
}
