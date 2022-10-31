package shared



type GoogleUpdatedLocation struct {
    DiffMask *string `json:"diffMask,omitempty"`
    Location *Location `json:"location,omitempty"`
    
}

