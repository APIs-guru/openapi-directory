package shared



type Metadata struct {
    Duplicate *Duplicate `json:"duplicate,omitempty"`
    MapsURL *string `json:"mapsUrl,omitempty"`
    NewReviewURL *string `json:"newReviewUrl,omitempty"`
    
}

