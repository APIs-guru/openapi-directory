package shared



type ThumbnailDetails struct {
    High *Thumbnail `json:"high,omitempty"`
    Maxres *Thumbnail `json:"maxres,omitempty"`
    Medium *Thumbnail `json:"medium,omitempty"`
    Standard *Thumbnail `json:"standard,omitempty"`
    
}

