package shared



type GetGoogleUpdatedLodgingResponse struct {
    DiffMask *string `json:"diffMask,omitempty"`
    Lodging *Lodging `json:"lodging,omitempty"`
    
}

